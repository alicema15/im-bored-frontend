import React, { Component } from 'react';
import logo from '../logo.svg';
import axios from 'axios';

class HomePage extends Component {
  async componentDidMount() {
    this.getAuthUrl();
  }

  async getAuthUrl() {
    const {data: {url}} = await axios.get("https://933a7619.ngrok.io/google/");
    window.location = url;
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
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default HomePage;