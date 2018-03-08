import React, { Component } from 'react';

//this is the HelpPage component which is used in App.js file
class HelpPage extends Component {
  render() {
    return (
      <div className="container-fluid">
	  <h3>VCL tutorial</h3>
	  <p>Welcome to iSchool’s Virtual Computer Lab, developed by the Digital Curation and Innovation Centre.
        If you wish to proceed to the video tutorials, please click on the link below:
		Part One: VCL Tutorial Video – beginner’s guide
		Part Two: VCL Tutorial Video – For Mac</p>
	  
	  </div>
    );
  }
}

export default HelpPage;
