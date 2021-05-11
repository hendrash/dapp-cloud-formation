#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TempStack } from '../lib/temp-stack';

const app = new cdk.App();
new TempStack(app, 'TempStack');
