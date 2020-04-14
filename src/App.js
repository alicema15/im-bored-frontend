import React, { useState } from 'react';

import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import { Route, Switch, Link, withRouter, Redirect } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Tag, Button, Input, Form } from 'antd';


import ProfilePage from './ProfilePage';
import CalendarPage from './CalendarPage';
import TimesPage from './TimesPage';
import GetStartedPage from './GetStartedPage';

import axios from 'axios';

import './App.css';
const { Header, Footer } = Layout;
const { Search } = Input;

function App() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
    formValue: ''
  });

  const [form] = Form.useForm();

  const handleServerResponse = (ok, msg, values) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });

    if (ok) {
      setServerState({
        submitting: false,
        status: {ok, msg},
        formValue: ''
      });
      form.resetFields();
    }
  };

  const handleOnSubmit = (values) => {
    console.log(values);
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/xwkqwnnl",
      data: values
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", values);
      })
      .catch(r => {
        handleServerResponse(false, "Error", values);
      });
  };

  return (
    <main>
      <Layout className="App app-body">
        <Header className="header">
          <Link to="/" style={{display:'flex'}}>
            <img className="logo" src="sm-logo-w-no-bg.png" />
          </Link>
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
          <div className="col col-md-6" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div className="subscribe-container" style={{display: 'flex', alignItems:'flex-start', justifyContent:'center', flexDirection:'column', width: '300px'}}>
              <div style={{color: '#C3CBCD', fontSize: '18px', marginBottom: '10px'}}>Join our Beta</div>
              <Form 
                form={ form }
                onFinish={ handleOnSubmit } 
                initialValues={{remember: true}} 
                style={{'display':'flex'}}
              >
                <Form.Item name="email" style={{'marginBottom': '0'}}>
                  <Input placeholder="Email" value={ serverState.formValue }/>
                </Form.Item>
                <Form.Item style={{'marginBottom': '0'}}>
                  <Button htmlType="submit" type="primary" style={{'marginLeft':'-10px'}}>Submit</Button>
                </Form.Item>
                {serverState.status && (
                  <p className={!serverState.status.ok ? "errorMsg" : "success"}>
                    {serverState.status.msg}
                  </p>
                )}
                
              </Form>
            {/* <Search enterButton="Submit" size="small" type="secondary" style={{width: '100%'}} onSubmit={ handleOnSubmit } />*/}
            </div>
          </div>
          <div className="col col-md-6">
          </div>
        </div>
      </Footer>
    </main>
  );
}

export default withRouter(App);
