import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Tag, Button } from 'antd';


import ProfilePage from './ProfilePage';
import CalendarPage from './CalendarPage';

import './App.css';
const { Header, Footer } = Layout;

function App() {
  return (
    <main>
      <Layout className="App">
        <Header className="header">Header</Header>
        <Switch>
          <Route path="/" component={ ProfilePage } />
          <Route path="/phone-number" render={routeProps => <ProfilePage {...routeProps} page='phone-number'/>} />
          <Route path="/thank-you" component={ ProfilePage } />
          <Route path="/calendar" component={ CalendarPage } exact />
        </Switch>
      </Layout>
      <Footer className="footer">Footer</Footer>
    </main>
  );
}

export default App;
