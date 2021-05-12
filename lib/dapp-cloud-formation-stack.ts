import * as ec2 from '@aws-cdk/aws-ec2';
import { SubnetType } from "@aws-cdk/aws-ec2";
import * as cdk from '@aws-cdk/core';
export class DappCloudFormationStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // The code that defines your stack goes here
    let vpc= new ec2.Vpc(this,"master-vpn",{
      cidr:"10.1.0.0/16",
      subnetConfiguration:[{
        cidrMask:24,
        name: "Web network",
        subnetType:SubnetType.PUBLIC
      },
    {
      cidrMask:24,
      name: "Application network",
      subnetType: SubnetType.PRIVATE
    },{
      cidrMask:24,
      name: "Data network",
      subnetType: SubnetType.ISOLATED
    }]
    })
  
  }
}
