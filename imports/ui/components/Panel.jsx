import React, { Component } from 'react';
import SideNav from 'react-sidenav';

// Internally developed.
// import BorderNav from './BorderNav.jsx';
// import BootTable from './BootTable.jsx';
// import BootList from './BootList.jsx';
// import './Panel.less';
// import StartMachine from './StartMachine.jsx';

export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labListTable: false,
      sandboxListTable: false,
      TemplateListTable: false,
      CreatedlabListTable: false,
      startMachine: false,
    };
    this.getLabList = this.getLabList.bind(this);
    this.sendList = this.sendList.bind(this);
    this.RenderLabList = this.RenderLabList.bind(this);
    this.RenderSandboxList = this.RenderSandboxList.bind(this);
    this.RenderTemplateList = this.RenderTemplateList.bind(this);
    this.RenderCreatedLabs = this.RenderCreatedLabs.bind(this);
    this.RenderStartMachine = this.RenderStartMachine.bind(this);
  }
  getLabList() {
    const params = {
      DryRun: false,
      Filters: [{
        Name: 'tag:Name',
        Values: [
          '*Present Use: Spring 2018*',
        ],
      },
      {
        Name: 'state',
        Values: [
          'available',
        ],
      },
      ],
    };
    const ec2 = new AWS.EC2({
      accessKeyId: '',
      secretAccessKey: '',
      apiVersion: '2016-11-15',
    });

    ec2.describeImages(
      params,
      (err, data) => {
        if (data) {
          const labs = {};
          labs.data = [];
          for (let i = 0; i < data.Images.length; i += 1) {
            labs.data.push({
              lab_name: data.Images[i].Name,
            });
          }
          this.sendList(data);
        }
      },
    );
  }
  sendList(list) {
    const labs = {};
    labs.data = [];
    for (let i = 0; i < list.Images.length; i += 1) {
      labs.data.push({
        lab_name: list.Images[i].Name,
      });
      console.log(labs.data); // the value is accessible because it is a local variable.
    }
  }
  RenderLabList() {
    this.setState({
      labListTable: !this.state.labListTable,
    });

    if (!this.state.CreatedlabListTable) {
      this.getLabList();
    }
  }
  RenderSandboxList() {
    this.setState({
      sandboxListTable: !this.state.sandboxListTable,
    });
  }
  RenderTemplateList() {
    this.setState({
      TemplateListTable: !this.state.TemplateListTable,
    });

    const templates = {};
    if (!this.state.TemplateListTable) {
      const params = {
        DryRun: false,
        Filters: [
          {
            Name: 'tag:Name',
            Values: [
              '*Template*',
              /* more items */
            ],
          },
          {
            Name: 'instance-state-name',
            Values: [
              'stopped',
              'running',
              /* more items */
            ],
          },
          /* more items */
        ],
      };
      const ec2 = new AWS.EC2({
        accessKeyId: '',
        secretAccessKey: '',
        apiVersion: '2016-11-15',
      });

      templates.data = [];

      ec2.describeInstances(params, (err, data) => {
        for (let i = 0; i < data.Reservations.length; i += 1) {
          templates.data.push({
            template_name: data.Reservations[i].Instances[0].Tags[0].Value,
          });
        }
      });
    }
  }
  RenderCreatedLabs() {
    this.setState({
      CreatedlabListTable: !this.state.CreatedlabListTable,
    });
    if (!this.state.CreatedlabListTable) {
      const params = {
        DryRun: false,
        Filters: [
          {
            Name: 'tag:username',
            Values: [
              'skaur721',
              /* more items */
            ],
          },
          {
            Name: 'instance-state-name',
            Values: [
              'stopped',
              'running',
              /* more items */
            ],
          },
          /* more items */
        ],
      };
      const ec2 = new AWS.EC2({
        accessKeyId: '',
        secretAccessKey: '',
        apiVersion: '2016-11-15',
      });
      ec2.describeInstances(params, (err, data) => {
        // console.log("Success", JSON.stringify(data));
        for (let i = 0; i < data.Reservations.length; i += 1) {
          console.log('Machine Name:', data.Reservations[i].Instances[0].Tags[0].Value);
          console.log('Image ID:', data.Reservations[i].Instances[0].ImageId);
          console.log('Machine State:', data.Reservations[i].Instances[0].State.Name);
        }
      });
    }
  }
  RenderStartMachine() {
    this.setState({
      startMachine: !this.state.startMachine,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="Body_side_div">
              <SideNav highlightColor="#FFFFFF" highlightBgColor="#00bcd4">
                <BorderNav navId="labs" navText="Class Labs" funct={this.RenderLabList} />
                {
                  this.state.labListTable ?
                    <BootTable data={this.data} /> :
                  null
                }
                <BorderNav navId="sandbox" navText="Sandbox" funct={this.RenderSandboxList} />
                {
                  this.state.sandboxListTable ?
                    <BootTable data={this.data} /> :
                  null
                }
                <BorderNav navId="templates" navText="Templates" funct={this.RenderTemplateList} />
                {
                  this.state.TemplateListTable ?
                    <BootList data={this.data} /> :
                  null
                }
              </SideNav>
            </div>
          </div>
          <div className="col-md-3">
            <div className="Body_side_div">
              <SideNav highlightColor="#FFFFFF" highlightBgColor="#00bcd4">
                <BorderNav navId="labMachines" navText="User Machines" funcTion={this.RenderCreatedLabs} />
                {
                  this.state.CreatedlabListTable ?
                    <BootTable data={this.data} /> :
                  null
                }
                <div className="paddingTop10" />
                <BorderNav navId="machine_1" navText="Manage User Machines" funcTion={this.RenderStartMachine} />
                {
                  this.state.startMachine ?
                    <StartMachine /> :
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
