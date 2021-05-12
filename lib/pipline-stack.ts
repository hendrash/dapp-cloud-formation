import * as cp from '@aws-cdk/aws-codepipeline';
import * as cpa from '@aws-cdk/aws-codepipeline-actions';
import { Construct, SecretValue, Stack, StackProps } from '@aws-cdk/core';
import { CdkPipeline, SimpleSynthAction } from '@aws-cdk/pipelines';


export class PiplineStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)
        let sourceArtifact = new cp.Artifact();
        let cloudAssemblyArtifact = new cp.Artifact();
        try{
        const pipeline = new CdkPipeline(this, 'Pipeline', {
            pipelineName: "dapp-cloud-formation-pipline",
            cloudAssemblyArtifact,
            sourceAction: new cpa.GitHubSourceAction({
                actionName: 'GitHub',
                output: sourceArtifact,
                oauthToken: SecretValue.plainText("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"),
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
    }catch(error){
        console.log(error)
        console.log(SecretValue.secretsManager('arn:aws:secretsmanager:us-east-2:727818404418:secret:github-token-2-KXuf8t'))
    }




    }
}