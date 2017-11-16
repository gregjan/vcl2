import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { Button } from 'react-bootstrap';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';

var nodeServiceIP = "http://localhost:3009/";

//this is the footer component which is used in App.js file
class HomePage extends Component {
	
	
	
	
  render() {
	  
	  //declare constants here
			const data = [{
					lab: 'INST462',
					instructor: 'Niklas Elmqvist',
						}]
						
			const columns = [{
					Header: 'Lab Name',
					accessor: 'lab' // String-based value accessors!
							}, {
					Header: 'Instructor',
					accessor: 'instructor',
					Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
					  }]
	  
	  //declare functions here	 
		    function handleClick(e){
			  e.preventDefault();
			  alert('yes');
			  
				}
				
			 function selectedText(e) {
       e.preventDefault();
			  alert('yes');
					}
		  
		  
					  
//this returns the sidebars and the center view			
    return (
       <body className="paddingTop40">
		<div className="panel panel-default">
			<div className="row">
				<div className ="col-md-3" align="right">Machine Name:</div>
				<div className ="col-md-3 paddingLeft10" align="left">INST775</div>
                <div className ="col-md-5"><button>Full Screen</button></div>
			</div>
		</div>
		<div className="container-fluid">
			<div className="row">
				<div className ="col-md-3">
					<div className="Body_left_div"> 
						<SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='labs'>       
						<Nav id='labs' >
							<NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
							<NavText><a>Labs</a></NavText>
						</Nav>
						<Nav id='sandbox'>
							<NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
							<NavText>Sandbox</NavText>
						</Nav>
						</SideNav>
						<div className="paddingTop10"></div>
			
						<div align ="center"><ReactTable data={data} columns={columns}/></div>
					</div>
		
				</div>
				
				
				<div className ="col-md-6 paddingLeft10"></div>
				
                <div className ="col-md-3">
					<div className="Body_right_div"> 
						<SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='labMachines'>       
						<Nav id='labMachines'>
							<NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
							<NavText>Lab Machines</NavText>
						</Nav>
						<Nav id='machine_1'>
							<NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
							<NavText>Machine information:</NavText>
						</Nav>
						</SideNav>
						<div className="paddingTop10"></div>
						<div>
						<SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='startStopButton'>       
						<Nav id='machineInformation'>   
							<NavText>Windows server 2016, NodeXL Basics, Google Chrome</NavText>
						</Nav>
						
						<nav>
						<div className="row">
							<div className="width40Percent height50Percent" align="center">
							<button onClick={handleClick}>Start </button>
							</div>
							<div className="width40Percent  paddingLeft10" align="left">
							<button >Stop</button>
							</div>
						</div>
						</nav>
						</SideNav>
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
		 
	  </body>
    );
  }
}

export default HomePage;
