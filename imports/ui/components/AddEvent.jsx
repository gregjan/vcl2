constructor(props) {
  super(props);
    this.state = {
      OS: "",
      Size: "",
      Ports: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  const field = event.target.name;
  this.setState({[field]: event.target.value})
}

handleSubmit(event) {
  event.preventDefault();
  const {OS, Size, Ports} = this.state;
  ec2 = new AWS.EC2({accessKeyId: '', secretAccessKey: '', apiVersion: '2016-11-15'});
  var instanceParams = {
    ImageId: 'ami-0596157a',
    InstanceType: 't2.small',
    KeyName: 'instance_key',
    SecurityGroupIds: ['sg-1a67167f'],
    MinCount: 1,
    MaxCount: 1
  };
  ec2.runInstances(instanceParams, function(err, data) {
    if (err)
      console.log(err, err.stack); // an error occurred
    else
      console.log(data); // successful response

    var instanceId = data.Instances[0].InstanceId
    var params = {
      Resources: [instanceId],
      Tags: [
        {
          Key: 'Name',
          Value: 'Template test'
        }
      ]
    };

    ec2.createTags(params, function(err) {
      console.log('Tagging instance', err ? 'failure': 'success')
    })
  });
};
