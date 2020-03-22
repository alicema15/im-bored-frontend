import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';

class CalendarPage extends Component {
  async componentDidMount() {
    await this.retrieveAccessToken();
  }

  async retrieveAccessToken() {
    const {code} = queryString.parse(window.location.search);
    await axios.post("http://67f16f7d.ngrok.io/google/access-token", {
      authCode: code
    });

    await axios.get('http://67f16f7d.ngrok.io/google/calendars');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Calendar</div>
        </header>
      </div>
    )
  }

}

export default CalendarPage;