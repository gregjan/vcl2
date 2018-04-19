import React, { Component } from 'react';

import SideNav, { Nav } from 'react-sidenav';
import { TableHeaderColumn } from 'react-bootstrap-table';

// Internally developed.
import BaseComponent from './BaseComponent.jsx';
import BorderNav from './BorderNav.jsx';
import BootTable from './BootTable.jsx';
import StartMachine from './StartMachine.jsx';
import AWS from 'aws-sdk';

AWS.config.update({region: 'us-east-1'});
  AWS_ACCESS_KEY_ID ='',
  AWS_SECRET_ACCESS_KEY = ''

export default class LeftPanel extends Component {
  constructor(props) {
    super(props);
    //this.getLabList= this.getLabList.bind(this);
    this.state = {labListTable: false, sandboxListTable: false, CreatedlabListTable: false, startMachine: false,};
    this.RenderLabList=this.RenderLabList.bind(this);
    this.RenderSandboxList=this.RenderSandboxList.bind(this);
    this.RenderCreatedLabs=this.RenderCreatedLabs.bind(this);
    this.RenderStartMachine=this.RenderStartMachine.bind(this);
    this.state = {
      data: [],
      manageLabList: (props) => {
        axios.get('http://localhost:443/getManageLabList')
          .then((response) => {
            alert(JSON.stringify(response));
          })
      }
    }
  }

  RenderLabList(){
    alert('calling aws api.......');
    this.setState({
      labListTable: !this.state.labListTable,
    }); 

      var params = {
          DryRun: false,
          Filters: [
            {
              Name: 'tag:Name',
              Values: [
                'Capstone--Instructor:ebonsign',
                /* more items */
              ]
            },{
              Name: 'instance-state-name',
              Values: [
                'running',
                /* more items */
              ]
            }
            /* more items */
          ]
  
        };

        // access aws ec2 
        ec2 = new AWS.EC2({ 
          accessKeyId: '',
          secretAccessKey: '',
          apiVersion: '2016-11-15'});
          ec2.describeInstances( params, function(err, data) {
          if (err) {
            console.log("Error", err.stack);
          } else {
            console.log("Success", JSON.stringify(data));
            //alert(JSON.stringify(data));
          }
          });
  }

  RenderSandboxList(){
    this.setState({
      sandboxListTable: !this.state.sandboxListTable,
    }); 
  }
  RenderCreatedLabs(){
    this.setState({
      CreatedlabListTable: !this.state.CreatedlabListTable,
    }); 
  }
  RenderStartMachine(){
    this.setState({
      startMachine: !this.state.startMachine,
    }); 
  }


  render() {
    //alert(JSON.stringify(this.props.task));
    return(
<div className="container-fluid">
  <div className="row">
    <div className="col-md-3">
      <div className="Body_left_div">
        <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4'>
          <BorderNav navId='labs' navText='Labs' funcTion= {this.RenderLabList} />
            {this.state.labListTable ?
              <BootTable data={this.data}/> :
                null
            }
          <BorderNav navId='sandbox' navText='Sandbox' funcTion= {this.RenderSandboxList}/>
          {this.state.sandboxListTable ?
              <BootTable data={this.data}/> :
                null
            }
        </SideNav>
      </div>
    </div>
  <div className="col-md-6"></div>
  <div className="col-md-3">
    <div className="Body_right_div">
      <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4'>
        <BorderNav navId='labMachines' navText='User Labs' funcTion= {this.RenderCreatedLabs} />
          {this.state.CreatedlabListTable ?
            <BootTable data={this.data}/> :
              null
          }
        <div className="paddingTop10"></div>
        <BorderNav navId='machine_1' navText='Manage Lab Machines' funcTion= {this.RenderStartMachine}/>
          {this.state.startMachine ?
            <StartMachine/> :
              null
          }
      </SideNav>
    </div>
  </div>
</div>
</div>);
  }
}
