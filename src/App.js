import React from 'react';

import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import CalendarPage from './CalendarPage';

import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={ HomePage } exact />
        <Route path="/calendar" component={ CalendarPage } exact />
      </Switch>
    </main>
  );
}

export default App;
