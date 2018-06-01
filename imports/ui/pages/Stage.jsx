import React from 'react';
import Guacamole from 'guacamole-common-js';

export default class Stage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: new Guacamole.Client(tunnel)
    };
  }

  componentDidMount() {
    document.body.appendChild(this.state.client.getDisplay().getElement());
    this.state.client.connect();
  }

  render () {
    <div>This Div should be modified by addGuacamole()</div>
  }
}
