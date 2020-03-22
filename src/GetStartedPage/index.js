import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import queryString from 'query-string';
import { Spin } from 'antd';
import axios from 'axios';

class GetStartedPage extends Component {
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
    this.setState({...this.state, authUrl });
  }

  async getAuthUrl() {
    const {data: {url}} = await axios.get("https://morning-plateau-28342.herokuapp.com/google/cal-auth");
    return url;
  }

  routeChange = () => {
    window.location.href = this.state.authUrl;
  }

  render() {
    if (this.state.authUrl) {
      this.routeChange();
      return (
        <Redirect to={this.state.authUrl} />
      )      
    } else {
      return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', marginTop: '-100px'}}>
          <Spin />
        </div>
      );
    }

  }

}

export default withRouter(GetStartedPage);