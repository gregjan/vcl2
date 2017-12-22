import React from 'react';

const AuthPage = ({ content }) => (
  <div className="page auth">
    <nav>
    </nav>
    <div className="content-scrollable">
      {content}
    </div>
  </div>
);

AuthPage.propTypes = {
  content: React.PropTypes.element,
};
