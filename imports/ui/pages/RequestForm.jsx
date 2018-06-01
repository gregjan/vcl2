import {Meteor} from 'meteor/meteor';
import React from 'react';
import { create, tag } from '../../api/aws/methods.js';

/* TODO: Create less file */
export default class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      os: '',
      softwareList: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const value = target.type === 'text' ? target.value : target.selected;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event){
    create.call({
      os: this.state.os,
      softwareList: this.state.softwareList
    }), (err) => {
      if (err) { this.redirectTo('/'); }
    }
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid" style={{margin: "0 500px"}}>
          <form onSubmit={this.handleSubmit}>
            <div><label>Operating System:</label></div>
            <div>
              <select name="os" required="required"
                selected={this.state.os}
                onChange={this.handleChange}>
                  <option value="Ubuntu">Ubuntu</option>
                  <option value="Windows">Windows</option>
              </select>
            </div>
            <div><label>Software List (Separated by comma):</label></div>
            <div>
              <input type="text" name="softwareList"
                placeholder="Enter requested software"
                value={this.state.softwareList}
                onChange={this.handleChange}
                required="required"/>
            </div>
            <button type="submit" className="btn btn-primary">Add Machine</button>
          </form>
        </div>
      </div>
    );
  };
}
