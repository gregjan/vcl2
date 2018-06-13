import React from 'react';

const ConnectionNotification = () => (
  <div className="notifications">
    <div className="notification">
      <span className="icon-sync" />
      <div className="meta">
        <div className="title-notification">
          Trying to Connect
        </div>
        <div className="description">
          Having Connection Issues
        </div>
      </div>
    </div>
  </div>
);

export default ConnectionNotification;
