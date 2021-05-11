#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DappCloudFormationStack } from '../lib/dapp-cloud-formation-stack';

const app = new cdk.App();
new DappCloudFormationStack(app, 'DappCloudFormationStack');
