import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Tag, Button, Input } from 'antd';

import {HeartFilled} from '@ant-design/icons';

import Device from "react-device-frame";
import { IPhoneX } from 'react-device-frames';
import axios from 'axios';

import './index.css';

const { Content } = Layout;
const { Search } = Input;

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      authUrl: null,
      profileFirstName: 'Alice',
      recipientFirstName: 'Ashita',
      confirmedTime: '1:30pm PST'
    };
  }
  async componentDidMount() {
    const authUrl = await this.getAuthUrl();
    // const authUrl = '';
    this.setState({...this.state, authUrl });
  }

  async getAuthUrl() {
    const { data: { url } } = await axios.get("https://morning-plateau-28342.herokuapp.com/google/");
    return url;
  }

  routeChange = () => {
    window.location.href = this.state.authUrl;
  }

  renderActiveProfile = () => {
    return (
      <div className="welcome-text container">
        <Tag color="green" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content', fontSize: '14px'}}>
          <HeartFilled style={{marginRight: '10px'}}/>
          <div>Online</div>
        </Tag>
        <div className="header-text">{this.state.profileFirstName} is available to chat today</div>
        <div className="sub-text">Sync your calendar and we'll find the best time to chat.</div>
        {/*<Button type="primary" onClick={ this.routeChange }>Talk to Alice</Button>*/}
        <Button type="primary" onClick={ () => { this.routeChange() }}>Talk to {this.state.profileFirstName}</Button>
      </div>
    );
  }

  // TO-DO: submit phone number and THEN redirect

  renderPhoneNumber = () => {
    return (
      <div className="welcome-text">
        <div className="header-text">Hi {this.state.recipientFirstName}! What is a good phone number for {this.state.profileFirstName} to reach you?</div>
        <br />
        <Search
          placeholder="e.g. 123-456-1289"
          enterButton="Submit"
          size="medium"
          style={{ width: 300 }}
          onSearch={ () => { this.props.history.push('/thank-you')}}
        />
      </div>
    );
  }

  renderThankYou() {
    return (
      <div className="welcome-text">
        <div className="header-text">Super! {this.state.profileFirstName} and you are set to talk at {this.state.confirmedTime}. She will text you a Google Link.</div>
      </div> 
    );
  }

  getBodySection = () => {
    switch (this.props.location.pathname) {
      case '/':
        return this.renderActiveProfile();
        break;
      case '/phone-number':
        return this.renderPhoneNumber();
        break;
      case '/thank-you':
        return this.renderThankYou();
        break;
      default:
        return this.renderActiveProfile();
    }
  }

  render() {
    return (
      <div className="container h-100" style={{'overflow':'scroll'}}>
        <div className="row h-100">
          <div className="col-md-5 device-container" style={{'padding': '40px'}}>
            {/*<Device className="device" name="iphone-x" url="https://pbs.twimg.com/media/C5xHw4lXEAEAnNK.jpg">
              <div>Photo</div>
            </Device>*/}
            <IPhoneX screenshot={"https://pbs.twimg.com/media/C5xHw4lXEAEAnNK.jpg"} />
          </div>
          <div className="col-md-6 offset-md-1 vertical-center h-100" >
            { this.getBodySection() }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfilePage);