#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DappCloudFormationStack } from '../lib/dapp-cloud-formation-stack';
import { PiplineStack } from '../lib/pipline-stack';

const app = new cdk.App();
new DappCloudFormationStack(app, 'DappCloudFormationStack');
new PiplineStack(app, "PipelineStack", {
    env: {
        account: '727818404418'
    }
});
app.synth()
