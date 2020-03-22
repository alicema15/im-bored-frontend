import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

import { Layout, Button } from 'antd';
import { ClockCircleOutlined, CalendarOutlined, GlobalOutlined } from '@ant-design/icons';

import './index.css';

const { Content } = Layout;

class TimesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeToChat: 60,
      timeSlots: [
        '7:00pm - 7:45pm, Saturday, March 21, 2020',
        '7:45pm - 8:00pm, Saturday, March 21, 2020 '
      ],
      timeZone: 'Pacific Time - US & Canada'
    }
  }

  render() {
    return (
      <Content className='vertical-center' style={{marginTop: '-100px'}} >
        <div style={{margin: 'auto'}}>
          <div className='header-text' style={{textAlign: 'left'}}>Great, you're all set</div>
          <div className='times-container'>
            <div className='row list-item'>
              <ClockCircleOutlined className='icon' />
              <div>{this.state.timeToChat} minutes to chat today.</div>
            </div>
            { this.state.timeSlots.map((slot) => {
              return (
                <div className='row list-item'>
                  <CalendarOutlined className='icon'/>
                  <div>{slot}</div>
                </div>);
            })}
            <div className='row list-item'>
              <GlobalOutlined className='icon'/>
              <div>{this.state.timeZone}</div>
            </div>
          </div>
          <Button className='btn-secondary' style={{marginTop: '30px'}} onClick={() => { this.props.history.push('/')}}>View Your Profile</Button>
          <br/>
        </div>
      </Content>
    )
  }

}

export default withRouter(TimesPage);