import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Tag, Button, Input } from 'antd';

import Device from "react-device-frame";
import axios from 'axios';

import './index.css';

const { Content } = Layout;
const { Search } = Input;

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = { authUrl: null };
  }
  async componentDidMount() {
    // const authUrl = await this.getAuthUrl();
    const authUrl = '';
    this.setState({ authUrl });
  }

  async getAuthUrl() {
    const {data: {url}} = await axios.get("http://67f16f7d.ngrok.io/google/");
    return url;
  }

  routeChange = () => {
    window.location.href = this.state.authUrl;
  }

  renderActiveProfile = () => {
    return (
      <div className="welcome-text">
        <Tag color="green">Online</Tag>
        <div className="header-text">Alice is available to chat today</div>
        <p className="sub-text">Sync your calendar and we'll find the best time to chat.</p>
        <Button type="primary" onClick={ this.routeChange }>Talk to Alice</Button>
      </div>
    );
  }

  // TO-DO: submit phone number and THEN redirect
  
  renderPhoneNumber = () => {
    return (
      <div className="welcome-text">
        <div className="header-text">Hi Ashita! What is a good phone number for Alice to reach you?</div>
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
        <div className="header-text">Super! Alice and you are set to talk at 1:30pm PST. She will text you a Google Link.</div>
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
      <Content className="content h-100">
        <div className="row h-100">
          <div className="col col-md-6 device-container">
            <Device className="device" name="iphone-x" url="https://pbs.twimg.com/media/C5xHw4lXEAEAnNK.jpg">
              <div>Photo</div>
            </Device>
          </div>
          <div className="col col-md-6 vertical-center h-100">
            { this.getBodySection() }
          </div>
        </div>
      </Content>
    );
  }
}

export default withRouter(ProfilePage);