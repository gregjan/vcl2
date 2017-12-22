import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';
import i18n from 'meteor/universe:i18n';
import BaseComponent from '../components/BaseComponent.jsx';

import AuthPage from './AuthPage.jsx';

export default class SignInPage extends BaseComponent {
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
      errors.email = i18n.__('pages.authPageSignIn.emailRequired');               //
    }
    if (!password) {
      errors.password = i18n.__('pages.authPageSignIn.passwordRequired');
    }

    this.setState({ errors });
    if (Object.keys(errors).length) { //Does this do anything?
      return;
    }

    Meteor.loginWithCas((err) => {                                                // Use CAS instead of Password.
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
        <h1 className="title-auth">
          {i18n.__('pages.authPageSignIn.signIn')}
        </h1>
        <p className="subtitle-auth">
          {i18n.__('pages.authPageSignIn.signInReason')}
        </p>
        <form onSubmit={this.onSubmit}>
          <div className="list-errors">
            {errorMessages.map(msg => (
              <div className="list-item" key={msg}>{msg}</div>
            ))}
          </div>
          <div className={`input-symbol ${errorClass('email')}`}>
            <input
              type="email"
              name="email"
              ref={(c) => { this.email = c; }}
              placeholder={i18n.__('pages.authPageSignIn.yourEmail')}
            />
            <span
              className="icon-email"
              title={i18n.__('pages.authPageSignIn.yourEmail')}
            />
          </div>
          <div className={`input-symbol ${errorClass('password')}`}>
            <input
              type="password"
              name="password"
              ref={(c) => { this.password = c; }}
              placeholder={i18n.__('pages.authPageSignIn.password')}
            />
            <span
              className="icon-lock"
              title={i18n.__('pages.authPageSignIn.password')}
            />
            <button type="submit" className="btn-primary">
              {i18n.__('pages.authPageSignIn.signInButton')}
            </button>
          </div>
        </form>
      </div>
    );

    return <AuthPage content={content} />;
  };


}
