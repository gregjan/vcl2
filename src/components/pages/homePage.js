import React, { Component } from 'react';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
 
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';

//this is the footer component which is used in App.js file
class HomePage extends Component {
  render() {
    return (
       <body className="paddingTop40">
		<div className = "panel panel-default panel-body panel-transparent">
			<div className ="row">
				<div className ="col-md-4 paddingLeft300">Machine Name</div>
                <div className ="col-md-4 col-sm-6 right-view" ><button>Full Screen</button></div>
            </div>
        </div>	
		<div className="Body_left_div"> 
			<SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='labs'>       
				<Nav id='labs'>
					<NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
					<NavText>Labs</NavText>
				</Nav>
				<Nav id='sandbox'>
					<NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
					<NavText>Sandbox</NavText>
				</Nav>
			</SideNav>
		</div>
		<div className="Body_center_div"> 
		
		</div>
		<div className="Body_right_div"> 
			<SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='labMachines'>       
				<Nav id='labMachines'>
					<NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
					<NavText>Lab Machines</NavText>
				</Nav>
				<Nav id='machine_1'>
					<NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
					<NavText>Machine 1</NavText>
				</Nav>
			</SideNav>
		</div>
	  </body>
    );
  }
}

export default HomePage;
