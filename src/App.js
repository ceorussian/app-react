import './App.css';
import React from "react";
import { Route, Switch } from 'react-router-dom'

import HomePage from "./pages/HomePage"
import Column from "./pages/Column"
import Posts from "./pages/Posts"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/columns" component={Column} />
        <Route exact path="/record" component={Posts} />
      </Switch>
    </div>
  );
}

export default App;