import React, { Component } from 'react';

class AddMachine extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: "",
      description: "",
      date: ""
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
    event.preventDefault();

    // TODO: Create backend Meteor methods to save created events
    alert("Will be Saved in a little bit :)")
    const { title, description, date } = this.state;

    // add method `insert` to db
     Events.insert({
        title,
        description,
        date
      });

     // clears input fields onSubmit
     this.setState({
        title: "",
        description: "",
        date: ""
      })
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
              <input
                type="text"
                className="form-control"
                placeholder="Enter Machine Name"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Machine Description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Instructor:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Instructor Name"
                name="date"
                value={this.state.date}
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