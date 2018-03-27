import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link } from 'react-router';
//import AuthPage from './AuthPage.jsx';

export default class SignInPage extends Component {
  constructor(props) {                                                            // properties are <X prop="Y" prop2="Z">
    super(props)
    this.state = Object.assign(this.state, { errors: {} });                       // assign(target, ...sources)
    this.onSubmit = this.onSubmit.bind(this);                                     // Bind event to this object.
  }

  onSubmit(events) {
    event.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    const errors = {};

    if (!email) {                                                                 // Check for empty email field.
      errors.email = 'Email is Required';
    }
    if (!password) {
      errors.password = 'Password is Required';
    }

    this.setState({ errors });
    if (Object.keys(errors).length) {
      return;
    }

    Meteor.loginWithCas((err) => {
      if (err) {
        this.setState({
          errors: { none: err.reason },
        });
      } else {
        this.context.router.push('/');                                            // Load main page if no errors.
      }
    });
  }

  render() {
    const { errors } = this.state;
    const errorMessages = Object.keys(errors).map(key => errors[key]);            // The map() method creates a new array with the
    const errorClass = key => errors[key] && 'error';                             // results of calling a provided function on every
                                                                                  // element in the calling array.
    const content = (
      <div className="wrapper-auth">
        <h1 className="title-auth">Sign In</h1>
        <p className="subtitle-auth">Signin Reason</p>
        <form onSubmit={this.onSubmit}>
          <div className="list-errors">
            {errorMessages.map(msg => (<div className="list-item" key={msg}>{msg}</div>))}
          </div>
          <div className={`input-symbol ${errorClass('email')}`}>
            <input type="email" name="email" ref={(c) => { this.email = c; }} placeholder='Your Email' />
            <span className="icon-email" title='Email' />
          </div>
          <div className={`input-symbol ${errorClass('password')}`}>
            <input type="password" name="password" ref={(c) => { this.password = c; }} placeholder='password' />
            <span className="icon-lock" title='Password' />
            <button type="submit" className="btn-primary">Sign In</button>
          </div>
        </form>
      </div>
    );

    return <AuthPage content={content} />;
  };


}
