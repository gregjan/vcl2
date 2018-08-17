import Guacamole from 'guacamole-common-js';
import React from 'react';
import encrypt from '../../api/encrypt/encrypt.js';

class GuacamoleStage extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    const token = encrypt({
      connection: {
        type: 'vnc',
        settings: {
          hostname: '172.16.1.203',
          password: 'foo',
          port: 5901
        },
      },
    });
    this.tunnel = new Guacamole.HTTPTunnel('ws://localhost:8080?width=640&height=480&token='+token);
    this.client = new Guacamole.Client(this.tunnel);
    console.log('Created G token');
  }

  componentDidMount() {
    console.log('Created G client');
    var display = document.getElementById("display");
    display.appendChild(this.client.getDisplay().getElement());
    //this.myRef.current.appendChild(this.client.getDisplay().getElement());
    console.log('G Display added')
    this.client.connect();
    console.log("G inserted into DOM and connected");
  }

  componentWillUnmount() {
    this.client.disconnect();
  }

  render() {
    return <div ref={this.myRef} id="display" />;
  }
}

export default GuacamoleStage;
