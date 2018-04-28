import React from 'react';

export default class Signin extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <script type="text/javascript">Meteor.loginWithCas([Meteor.loginWithCanvas()]);</script>
    )
  };
}
