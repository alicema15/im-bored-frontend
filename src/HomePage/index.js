import React, { Component } from 'react';
import logo from '../logo.svg';
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href={ this.state.authUrl }
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </header>
      </div>
    );
  }
}

export default HomePage;