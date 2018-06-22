import AWS from 'aws-sdk';


class AwsAPI {
  // Function for creating new instances.
  create(os, softwareList, instanceParams) {
    // const params = instanceParams || this.DEFAULT_PARAMS; not defined.

    const instancePromise = new AWS.EC2({ apiVersion: this.API_VERSION })
      .runInstances(instanceParams)
      .promise();

    // TODO: Remove this segment after verifying success.
    instancePromise.then((data) => {
      console.log(data);
      // const instanceId = data.Instances[0].InstanceId;
      // console.log('Created instance', instanceId);
    });

    // Tag the newly created instance.
    /*
    this.tag({
      Resources: [instanceId],
      Tags: [
        { Key: 'Name', Value: 'test' /* Change to Unique Identifier  },
        { Key: 'Class', Value: '' /* Class Shorthand  },
        { Key: 'Other', Value: 'Nothing to see here' },
      ],
    }); */
  }

  tag(tagParams) {
    const tagPromise = new AWS.EC2({ apiVersion: this.API_VERSION })
      .createTags(tagParams)
      .promise();

    tagPromise.then((data) => { console.log('Instance tagged'); })
      .catch(err => console.error(err, err.stack));
  }
}

export const aws = new AwsAPI('aws');
