import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Tag, Button } from 'antd';
import axios from 'axios';

import './index.css';

const { Header, Content, Footer } = Layout;


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
      <Layout className="App">
        <Header className="header">Header</Header>
        <Content className="content h-100">
          <div className="row h-100">
            <div className="col col-md-6">
              <div>Photo</div>
            </div>
            <div className="col col-md-6 vertical-center h-100">
              <div className="welcome-text">
                <Tag color="green">Online</Tag>
                <div className="header-text">Alice is available to chat today</div>
                <div className="sub-text">Sync your calendar and we'll find the best time to chat.</div>
                <Button type="primary" onClick={ this.routeChange }>Talk to Alice</Button>
              </div>
            </div>
          </div>
        </Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    );
  }
}

export default withRouter(HomePage);