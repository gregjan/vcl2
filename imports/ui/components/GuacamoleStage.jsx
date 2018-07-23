import Guacamole from 'guacamole-common-js';
import React from 'react';
import encrypt from '../../api/encrypt/encrypt.js';

class GuacamoleStage extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    const token = encrypt({
      connection: {
        type: 'rdp',
        settings: {
          hostname: '35.168.17.48',
          username: 'Administrator',
          password: 'inst742@umd',
          'enable-drive': true,
          'create-drive-path': true,
          security: 'any',
          'ignore-cert': true,
          'enable-wallpaper': false,
        },
      },
    });

    this.tunnel = new Guacamole.WebSocketTunnel(`ws://guacd:8080/?token=${token}`);
    this.client = new Guacamole.Client(this.tunnel);
  }

  componentDidMount() {
    this.myRef.current.appendChild(this.client.getDisplay().getElement());
    this.client.connect();
  }

  componentWillUnmount() {

  }

  render() {
    return <div ref={this.myRef} />;
  }
}

export default GuacamoleStage;
