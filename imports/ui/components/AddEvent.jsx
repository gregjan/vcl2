import React, { Component } from 'react';
import {FormControl} from 'react-bootstrap';
import AWS from 'aws-sdk';
AWS.config.update({region: 'us-east-1'});
AWS_ACCESS_KEY_ID ='',
AWS_SECRET_ACCESS_KEY = ''
class AddMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {OS:"", Size:"", Ports:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event){
    const field = event.target.name;
    this.setState({
      [field]: event.target.value
    })
    //this.setState({value: event.target.value});

  }

  handleSubmit(event){

    //alert('Class Code was submitted: ' + this.state.value);
    event.preventDefault();
    const {OS, Size, Ports} = this.state;
    console.log("\nOS type is: ", OS, "\nMachine Size is: ", Size, "\nPorts are: ", Ports);
    ec2 = new AWS.EC2({
      accessKeyId: '',
      secretAccessKey: '',
      apiVersion: '2016-11-15'});
    var instanceParams = {
     ImageId: 'ami-0596157a',
     InstanceType: 't2.small',
     KeyName: 'instance_key',
     SecurityGroupIds: ['sg-1a67167f'],
     MinCount: 1,
     MaxCount: 1
    };
    ec2.runInstances(instanceParams, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response

    var instanceId=data.Instances[0].InstanceId
    console.log("Created instance", instanceId)
    // Add tags to the instanceId
    var params={Resources:[instanceId], Tags: [
      {
        Key:'Name',
        Value:'Template test'
      }
    ]};

    ec2.createTags(params, function(err){
      console.log('Tagging instance', err? 'failure':'success')
    })
    });
    //window.location.reload();
    //alert('Operating System type was submitted: ' + this.state.value);
  };

  render() {
    return (
      <div>
       <div className="text-left">
          <h4></h4>
        </div>
        <hr />

        <div className="jumbotron jumbotron-fluid" style={{ margin: "0 500px" }}>
          <form onSubmit={this.handleSubmit}>
            <div><label>Operating System:</label></div>
            <div>
              <select required value={this.state.value} name="OS" value={this.state.name} onChange={this.handleChange}>
                <option value="">Select</option>
                <option value="Windows">Windows</option>
                <option value="Ubuntu">Ubuntu</option>
              </select>
            </div>
            <div><label>System Size:</label></div>
            <div>
              <select required value={this.state.value} name="Size" value={this.state.name} onChange={this.handleChange}>
                <option value="">Select</option>
                <option value="t2.small">Small</option>
                <option value="t2.medium">Medium</option>
                <option value="t2.large">Large</option>
              </select>
            </div>
            <div><label>Software List (Separated by comma):</label></div>
              <div><input type="text" placeholder="Enter ports" name = "Ports" value={this.state.name} onChange={this.handleChange} required /></div>
            <div><label>Incoming Ports (e.g. 22,80,443):</label></div>
              <div><input type="text" placeholder="Enter ports" name = "Ports" value={this.state.name} onChange={this.handleChange} required /></div>
            <button type="submit" className="btn btn-primary">Add Machine</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMachine;
