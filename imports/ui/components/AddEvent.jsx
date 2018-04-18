import React, { Component } from 'react';
import {FormControl} from 'react-bootstrap';

class AddMachine extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: "",
      description: "",
      instructor: ""
    }
  }

handleChange(event){
    const field = event.target.name;

    // we use square braces around the key `field` coz its a variable (we are setting state with a dynamic key name)
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit(event){
    window.location.reload(); 
    event.preventDefault();

    // TODO: Create backend Meteor methods to save created events
    alert("Will be Saved in a little bit :)")
    const { title, description, instructor } = this.state;

    // add method `insert` to db
     Events.insert({
        title,
        description,
        instructor
      });

     // clears input fields onSubmit
     this.setState({
        title: "",
        description: "",
        instructor: "" 
      })
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
              <label>Machine Name:</label>
              <FormControl
               type="text"
               placeholder="Enter Machine Name"
               name="title"
               value={this.state.title}
               onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <FormControl
               type="text"
               placeholder="Enter Machine Description"
               name="description"
               value={this.state.description}
               onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Instructor:</label>
               <FormControl
               type="text"
               placeholder="Enter Instructor Name"
               name="instructor"
               value={this.state.instructor}
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