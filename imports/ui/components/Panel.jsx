import React, { Component } from 'react';

import SideNav, { Nav } from 'react-sidenav';
import { TableHeaderColumn } from 'react-bootstrap-table';
import { Route } from 'react-router-dom';
import AWS from 'aws-sdk';
// Internally developed.
import BaseComponent from './BaseComponent.jsx';
import BorderNav from './BorderNav.jsx';
import BootTable from './BootTable.jsx';
import BootList from './BootList.jsx';
import './Panel.less';
import StartMachine from './StartMachine.jsx';
import About from '../pages/About.jsx';
import Help from '../pages/Help.jsx';
import Signin from '../pages/Signin.jsx';
import RequestForm from '../pages/RequestForm.jsx';
AWS.config.update({region: 'us-east-1'});

export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {labListTable: false, sandboxListTable: false, TemplateListTable: false, CreatedlabListTable: false, startMachine: false, labs:{}, result:[]};
    this.RenderLabList=this.RenderLabList.bind(this);
    this.RenderSandboxList=this.RenderSandboxList.bind(this);
    this.RenderTemplateList=this.RenderTemplateList.bind(this);
    this.RenderCreatedLabs=this.RenderCreatedLabs.bind(this);
    this.RenderStartMachine=this.RenderStartMachine.bind(this);
    this.getLabList=this.getLabList.bind(this);
    this.sendList=this.sendList.bind(this);
  }
  //AWS sdk describe images API
  RenderLabList() {
    console.log('calling aws api to get lab list.......');
    //var labs={};
    this.setState({
      labListTable: !this.state.labListTable,
    });

    if(!this.state.CreatedlabListTable){
      this.getLabList();
    }
  }// End of RenderLabList Function

  getLabList() {
    console.log("inside lab list.....");
    var params = {
      DryRun: false,
      Filters: [{
        Name: 'tag:Name',
        Values: [
          '*Present Use: Spring 2018*',
        ]},
        {
          Name: 'state',
          Values: [
            'available',
          ]
        }
      ]
    };
    // access aws ec2
    ec2 = new AWS.EC2({
      accessKeyId: '',
      secretAccessKey: '',
      apiVersion: '2016-11-15'
    });

    ec2.describeImages(params,
      function(err, data, result) {
        if (data) {
          this.sendList(data);
        } else {
          //console.log( JSON.stringify(data));
          console.log("Error", err.stack);
        }
      }
      .bind(this)
    );
  }

  sendList(list) {
    //this.labs={};
    var labs={};
    labs.data= new Array();
    for (i=0; i < list['Images'].length; i++){
      labs.data.push({
        "lab_name": list['Images'][i].Name,
      });
    }
    console.log(labs.data); // the value is accessible because it is a local variable.
  }
  // try to log the value here i.e. as a global variable.

  ////////////////////////////////////////////////////////////////////////////////
  RenderSandboxList() {
    this.setState({
    sandboxListTable: !this.state.sandboxListTable,
  });
}// End of SandboxList Function
  ////////////////////////////////////////////////////////////////////////////////
  RenderTemplateList() {
    console.log('calling aws api to get Template list.......');
    this.setState({
      TemplateListTable: !this.state.TemplateListTable,
    });
    if(!this.state.TemplateListTable) {
      var params = {
        DryRun: false,
        Filters: [
          {
            Name: 'tag:Name',
            Values: [
              '*Template*',
              /* more items */
            ]
          },
          {
            Name: 'instance-state-name',
            Values: [
              'stopped',
              'running',
              /* more items */
            ]
          }
            /* more items */
        ]
      };
      ec2 = new AWS.EC2({
        accessKeyId: '',
        secretAccessKey: '',
        apiVersion: '2016-11-15'
      });

      var templates={};
      templates.data= new Array();

      ec2.describeInstances(params, function(err, data) {
        if (err) {
          console.log("Error", err.stack);
        } else {
          for(i=0; i< data['Reservations'].length ; i++){
            templates.data.push({
              "template_name": data['Reservations'][i]['Instances'][0]['Tags'][0].Value,
            });
          }
        }
      });
    }
    alert(JSON.stringify(templates));
  }// End of Template List Function
  ////////////////////////////////////////////////////////////////////////////////
  RenderCreatedLabs(){
    console.log('calling aws api to get user machines.......');
    this.setState({
      CreatedlabListTable: !this.state.CreatedlabListTable,
    });
    if(!this.state.CreatedlabListTable){
      var params = {
        DryRun: false,
        Filters: [
          {
            Name: 'tag:username',
            Values: [
              'skaur721',
              /* more items */
            ]
          },
          {
            Name: 'instance-state-name',
            Values: [
              'stopped',
              'running',
              /* more items */
            ]
          }
          /* more items */
        ]
      };
      ec2 = new AWS.EC2({
        accessKeyId: '',
        secretAccessKey: '',
        apiVersion: '2016-11-15'
      });
      ec2.describeInstances(params, function(err, data) {
        if (err) {
          console.log("Error", err.stack);
        } else {
          //console.log("Success", JSON.stringify(data));
          for(i=0; i< data['Reservations'].length ; i++) {
            console.log("Machine Name:", data['Reservations'][i]['Instances'][0]['Tags'][0].Value);
            console.log("Image ID:", data['Reservations'][i]['Instances'][0].ImageId);
            console.log("Machine State:", data['Reservations'][i]['Instances'][0]['State'].Name);
            console.log("..........................................");
          }
        }
      });
    }
  }// End of RenderCreatedLabs Function
  ////////////////////////////////////////////////////////////////////////////////
  RenderStartMachine() {
    this.setState({
      startMachine: !this.state.startMachine,
    });
  }//End of RenderStartMachine Function
  ////////////////////////////////////////////////////////////////////////////////

  render() {
    //alert(JSON.stringify(this.props.task));
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="Body_side_div">
              <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4'>
                <BorderNav navId='labs' navText='Class Labs' funcTion= {this.RenderLabList} />
                {
                  this.state.labListTable ?
                  <BootTable data={this.data}/> :
                  null
                }
                <BorderNav navId='sandbox' navText='Sandbox' funcTion= {this.RenderSandboxList}/>
                {
                  this.state.sandboxListTable ?
                  <BootTable data={this.data}/> :
                  null
                }
                <BorderNav navId='templates' navText='Templates' funcTion= {this.RenderTemplateList}/>
                {
                  this.state.TemplateListTable ?
                  <BootList data={this.data}/> :
                  null
                }
              </SideNav>
            </div>
          </div>
          <div className="col-md-6">
            <Route path='/about' component={About}/>
            <Route path='/help' component={Help}/>
            <Route path='/requestform' component={RequestForm}/>
            <Route path='/signin' component={Signin}/>
          </div>
          <div className="col-md-3">
            <div className="Body_side_div">
              <SideNav highlightColor='#FFFFFF' highlightBgColor='#00bcd4'>
                <BorderNav navId='labMachines' navText='User Machines' funcTion= {this.RenderCreatedLabs} />
                {
                  this.state.CreatedlabListTable ?
                  <BootTable data={this.data}/> :
                  null
                }
                <div className="paddingTop10"></div>
                <BorderNav navId='machine_1' navText='Manage User Machines' funcTion= {this.RenderStartMachine}/>
                {
                  this.state.startMachine ?
                  <StartMachine/> :
                  null
                }
              </SideNav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
