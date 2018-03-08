import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { Button } from 'react-bootstrap';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import "C:/Users/abhis/Desktop/ischool/vcl2.0/node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
<script src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.js" />
//declare global variables here
var axios = require('axios');
let ReactBsTable = require('react-bootstrap-table');



var nodeServiceIP = "http://localhost:3009/";
var color = {
 color: 'white'
};
//this is the footer component which is used in App.js file
function handleClick(e){
			  e.preventDefault();
			  alert('yes');
			  
				}
class HomePage extends Component {
	constructor(props) {
    super(props);
	this.getLabList= this.getLabList.bind(this);
	this.getSandboxList= this.getSandboxList.bind(this);
	this.manageLabList=this.manageLabList.bind(this);
    this.state = {
	  data: [],
	  ManageLabList: [],
      requestFailed: false
    }
  }
  
	getLabList(){
		axios.get('http://localhost:3009/getLabList')
		 .then(response =>{
            return response
		})
		.then(response=> {
			this.setState({
				data: response.data.message
			})
		},() => {
        this.setState({
          requestFailed: true
        })
      })
	}
	
	getSandboxList(){
		this.setState({
				data: ''
			})
		axios.get('http://localhost:3009/getSandboxList')
		 .then(response =>{
            return response
		})
		.then(response=> {
			this.setState({
				data: response.data.message
			})
		},() => {
        this.setState({
          requestFailed: true
        })
      })
	}
	
	manageLabList(){
		alert("fetching zyb machine list ");
		this.setState({
			ManageLabList: [{"lab_name":"INFM_743","instructor":"Prof. Jennifer Golbeck"},{"lab_name":"DCIP","instructor":"Jesse Johnston"}]
		})
		
		
		/*axios.get('http://localhost:3009/getManageLabList')
		 .then(response =>{
			 alert(JSON.stringify(response));
            //return response
			
		})*/
		
	}

							
	

handleCreateMachine(row, isSelected, e) {
	
	alert("invoke method to check if the machine is already created." )
	alert("invoke create machine method.")
	
}

handleLaunchMachine(row, isSelected, e) {
	
	alert("invoke method to launch the selected machine." )
	
}
	
  render() {	
  const isDataAvailable = this.state.data;
  if(this.state.requestFailed) return <p>Failed...</p>
  if (!this.state.data) return <p>Loading...</p>
  
  const selectLab = {
    mode: 'radio',  // multi select
    onSelect: this.handleCreateMachine
	};
   
   const selectManageMachine = {
    mode: 'radio',  // multi select
    onSelect: this.handleLaunchMachine
	};

  const options = {
      sizePerPageList: [ 5, 10, 15, 20 ],
      sizePerPage: 5,
    };	
	
    return (
       <body className="paddingTop40">
		<div className="panel panel-default">
			<div className="row">
				<div id= "machine_name" className ="col-md-3" align="right">Machine Name:</div>
				<div className ="col-md-3 paddingLeft10" align="left"></div>
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
							<NavText><a href="#" style={color} onClick={this.getLabList}>Labs</a></NavText>
						</Nav>
						<Nav id='sandbox'>
							<NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
							<NavText><a href="#" style={color} onClick={this.getSandboxList}>Sandbox</a></NavText>
						</Nav>
						</SideNav>
						<div className="paddingTop10"></div>
						<div><BootstrapTable data={this.state.data} striped hover selectRow={ selectLab }   pagination={ true } options={ options }>
						<TableHeaderColumn isKey dataField= "lab_name">Lab Name</TableHeaderColumn>
						<TableHeaderColumn dataField="instructor">Instructor</TableHeaderColumn>
						</BootstrapTable></div>
					</div>
		
				</div>
				
				
				<div className ="col-md-6 paddingLeft10"></div>
				
                <div className ="col-md-3">
					<div className="Body_right_div"> 
						<SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4' defaultSelected='labMachines'>       
						<Nav id='labMachines'>
							<NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
							<NavText><a href="#" style={color} onClick={this.manageLabList}>Manage Lab Machines</a></NavText>
						</Nav>
						<div><BootstrapTable data={this.state.ManageLabList} striped hover selectRow={ selectManageMachine }  options={ options }>
						<TableHeaderColumn isKey dataField= "lab_name">Lab Name</TableHeaderColumn>
						<TableHeaderColumn dataField="instructor">Instructor</TableHeaderColumn>
						</BootstrapTable></div>
						<div className="paddingTop10"></div>
						<Nav id='machine_1'>
							<NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
							<NavText>Machine information:</NavText>
						</Nav>
						</SideNav>
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
