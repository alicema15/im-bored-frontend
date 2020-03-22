import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

import mobiscroll from "@mobiscroll/react";
import { Layout, Button } from 'antd';
const { Content } = Layout;

class CalendarPage extends Component {
  constructor(props) {
      super(props);

      this.state = {
          myEvents: []
      };
      
      mobiscroll.util.getJson('https://trial.mobiscroll.com/events/', (events) => {
          this.setState({ myEvents: events });
      }, 'jsonp');
  }

  async componentDidMount() {
    // await this.retrieveAccessToken();
  }

  async retrieveAccessToken() {
    const {code} = queryString.parse(window.location.search);
    await axios.post("https://morning-plateau-28342.herokuapp.com/google/access-token", {
      authCode: code
    });
  }

  routeChange = () => {
    this.props.history.push('/youre-set');
  }

  render() {
    return (
      <Content className='vertical-center' style={{marginTop: '-100px'}} >
        <div style={{margin: 'auto', width: '500px'}}>
          <div className='header-text'>When are you available to chat today?</div>
          <br/>
          <mobiscroll.Eventcalendar
                theme="ios" 
                themeVariant="light"
                display="inline"
                data={this.state.myEvents}
                view={{
                    calendar: { type: 'week' },
                    eventList: { type: 'day', scrollable: true  }
                }}
                style={{ height: '500px' }}
            />
          <Button type="primary" onClick={ this.routeChange }>Confirm Availability</Button>
        </div>
      </Content>
    )
  }
}

export default withRouter(CalendarPage);