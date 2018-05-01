import React, { Component } from 'react';
import {FormControl} from 'react-bootstrap';

class AddMachine extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      ClassCode: "",
      OperatingSystem: "",
      systemSize: "",
      ports:"",
    }
  }

handleChange(event){
    const field = event.target.name;
    alert(field);
    // we use square braces around the key `field` because its a variable (we are setting state with a dynamic key name)
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    window.location.reload();
    // TODO: Create backend Meteor methods to save created events
    alert("Will be Saved in a little bit :)")
    const { ClassCode, OperatingSystem, systemSize, ports } = this.state;

    // add method `insert` to db
    alert(ClassCode);
     //this.setState({redirect: true }));
    //return <Redirect to='http://localhost:3000/'  />
  }

  render() {
    return (
      <div>
       <div className="text-left">
          <h4></h4>
        </div>
        <hr />

        <div className="jumbotron" style={{ margin: "0 500px" }}>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>Class Code:</label>
              <FormControl
               type="text"
               placeholder="Enter Class Code"
               name="ClassCode"
               value={this.state.name}
               onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Operating System:</label>
              <FormControl componentClass="select" placeholder="select" onChange={this.handleChange} name="OperatingSystem" value={this.state.value} >
              <option value="Windows">Windows</option>
              <option value="Ubuntu">Ubuntu</option>
              </FormControl>
            </div>

            <div className="form-group">
              <label>System Size:</label>
              <FormControl componentClass="select" placeholder="choose">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              name="systemSize"
              value={this.state.value}
              onChange={this.handleChange}
              </FormControl>
            </div>

            <div className="form-group">
              <label>Incoming Port:</label>
              <FormControl
              type="text"
              placeholder="Enter Ports"
              name="ports"
              value={this.state.name}
              onChange={this.handleChange}
             />
            </div>

            <button type="submit" className="btn btn-primary">Add Machine</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMachine;
