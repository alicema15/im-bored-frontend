import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

import { Layout } from 'antd';

const { Content } = Layout;

class TimesPage extends Component {

  render() {
    return (
      <Content className='vertical-center' style={{marginTop: '-100px'}} >
        <div style={{margin: 'auto', width: '500px'}}>
          <div className='header-text'>Great, you're all set</div>
          <br/>
        </div>
      </Content>
    )
  }

}

export default withRouter(TimesPage);