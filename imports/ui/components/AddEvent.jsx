import React, { Component } from 'react';
import {FormControl} from 'react-bootstrap';

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
    console.log("class code is: ", ClassCode, "\nOS type is: ", OS, "\nMachine Size is: ", Size, "\nPorts are: ", Ports);
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
              <select value={this.state.value} name="OS" value={this.state.name} onChange={this.handleChange}>
                <option value="Select">Select</option>
                <option value="Windows">Windows</option>
                <option value="Ubuntu">Ubuntu</option>
              </select>
            </div>
            <div><label>System Size:</label></div>
            <div>
              <select value={this.state.value} name="Size" value={this.state.name} onChange={this.handleChange}>
                <option value="Select">Select</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div><label>Software List (Separated by comma):</label></div>
              <div><input type="text" placeholder="Enter ports" name = "Ports" value={this.state.name} onChange={this.handleChange} /></div>
            <div><label>Incoming Ports (e.g. 22,80,443):</label></div>
              <div><input type="text" placeholder="Enter ports" name = "Ports" value={this.state.name} onChange={this.handleChange} /></div>
            <button type="submit" className="btn btn-primary">Add Machine</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMachine;
