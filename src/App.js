import React from 'react';

import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import { Route, Switch, Link, withRouter, Redirect } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Tag, Button, Input } from 'antd';


import ProfilePage from './ProfilePage';
import CalendarPage from './CalendarPage';
import TimesPage from './TimesPage';
import GetStartedPage from './GetStartedPage';

import axios from 'axios';

import './App.css';
const { Header, Footer } = Layout;
const { Search } = Input;

function App() {
  return (
    <main>
      <Layout className="App">
        <Header className="header">
          <img className="logo" src="sm-logo-w-no-bg.png" onClick={() => { return <Redirect to="/"/> }}/>
        </Header>
        <Switch>
          <Route path="/" component={ ProfilePage } exact />
          <Route path="/phone-number" render={routeProps => <ProfilePage {...routeProps} page='phone-number'/>} />
          <Route path="/thank-you" component={ ProfilePage } />
          <Route path="/calendar" component={ CalendarPage } exact />
          <Route path="/youre-set" component={ TimesPage } exact />
          <Route path="/get-started" component={ GetStartedPage } exact />
        </Switch>
      </Layout>
      <Footer className="footer">
        <div className="row">
          <div className="col col-md-6">
            <div style={{color: '#C3CBCD', fontSize: '18px', marginBottom: '10px', alignSelf: 'start'}}>Join our Beta</div>
            <Search enterButton="Submit" size="small" type="secondary" style={{width: '50%'}} />
          </div>
          <div className="col col-md-6">
          </div>
        </div>
      </Footer>
    </main>
  );
}

export default withRouter(App);
