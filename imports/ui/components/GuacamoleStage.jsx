import Guacamole from 'guacamole-common-js';
import React, { Component } from 'react';

export default class GuacamoleStage extends Component {
  constructor(props) {
    super(props);

    const tunnel = new Guacamole.WebSocketTunnel('/guac/');

    this.state = {
      client: new Guacamole.Client(tunnel),
    };
  }

  componentDidMount() {
    this.client.connect();
  }

  render() {
    return (
      <div>
        {this.state.client.getDisplay().getElement()}
      </div>
    );
  }
}
