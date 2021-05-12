import * as cp from '@aws-cdk/aws-codepipeline';
import * as cpa from '@aws-cdk/aws-codepipeline-actions';
import { Construct, SecretValue, Stack, StackProps } from '@aws-cdk/core';
import { CdkPipeline, SimpleSynthAction } from '@aws-cdk/pipelines';


export class PiplineStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)
        let sourceArtifact = new cp.Artifact();
        let cloudAssemblyArtifact = new cp.Artifact();
        const pipeline = new CdkPipeline(this, 'pipline', {
            pipelineName: "dapp-cloud-formation-pipline",
            cloudAssemblyArtifact,
            sourceAction: new cpa.GitHubSourceAction({
                actionName: 'GitHub',
                output: sourceArtifact,
                oauthToken: SecretValue.secretsManager('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'),
                trigger: cpa.GitHubTrigger.POLL,
                owner: "hendrash",
                repo: "master"
            }),
            synthAction: SimpleSynthAction.standardNpmSynth({
                sourceArtifact,
                cloudAssemblyArtifact,
                buildCommand: 'npm run build'
            })
        })




    }
}