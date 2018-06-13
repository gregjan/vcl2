import { Meteor } from 'meteor/meteor';

class aws {

  // TODO: Move these to Meteor Settings.
  const DEFAULT_PARAMS = {
    ImageId: 'ami-XXXXXXXX',
    InstanceType: 't2.small',
    MinCount: 1,
    MaxCount: 1,
  };

  const API_VERSION = '2016-11-15';

  // Function for creating new instances.
  create(instanceParams, os, softwareList) {
    let instancePromise = new AWS.EC2({apiVersion: API_VERSION})
      .runInstances(if !(instanceParams) ? DEFAULT_PARAMS : instanceParams )
      .promise();

    //TODO: Remove this segment after verifying success.
    instancePromise.then((data) => {
      console.log(data);
      let instanceId = data.Instances[0].InstanceId;
      console.log("Created instance", instanceId);
    });

    // Tag the newly created instance.
    this.tag({
      Resources: [instanceId],
      Tags: [
        { Key: 'Name',  Value: "test" /* Change to Unique Identifier */ },
        { Key: 'Class', Value: '' /* Class Shorthand */ },
        { Key: 'Other', Value: 'Nothing to see here' }
      ]
    });
  }

  tag(tagParams) {
    let tagPromise = new AWS.EC2({apiVersion: API_VERSION})
      .createTags(tagParams)
      .promise();

    tagPromise.then((data) => { console.log("Instance tagged"); })
      .catch((err) => console.error(err, err.stack));
  }
}
