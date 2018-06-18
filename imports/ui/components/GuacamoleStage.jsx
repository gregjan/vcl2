import Guacamole from 'guacamole-common-js';
import React, { Component } from 'react';

export default class GuacamoleStage extends Component {
  constructor(props) {
    super(props);
    const tunnel = new Guacamole.Tunnel('tunnel');
    const client = new Guacamole.Client(tunnel);
  }

  componentDidMount() {
    document.body.appendChild(client.getDisplay().getElement());
    client.connect();
  }

  render() {
    return (
      <div>This Div should be modified by addGuacamole()</div>
    );
  }
}
