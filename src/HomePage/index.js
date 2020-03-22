import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import './index.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { authUrl: null };
  }
  async componentDidMount() {
    const authUrl = await this.getAuthUrl();
    this.setState({ authUrl });
  }

  async getAuthUrl() {
    const {data: {url}} = await axios.get("http://67f16f7d.ngrok.io/google/");
    return url;
  }

  routeChange = () => {
    window.location.href = this.state.authUrl;
  }

  render() {
    return (
      <div className="App">
        <div className="header">Header</div>
        <div className="container">
          <div className="row">
            <div className="col col-md-4">
              <div>Photo</div>
            </div>
            <div className="col col-md-8">
              <div className="welcome-text">
                <div className="header-text">Alice is available to chat today</div>
                <div className="sub-text">Sync your calendar and we'll find the best time to chat.</div>
                <button onClick={ this.routeChange }>Talk to Alice</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default withRouter(HomePage);