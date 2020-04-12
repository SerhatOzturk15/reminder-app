import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RemainderDetailsContainer from "./containers/RemainderDetailsContainer";
import ReminderFormContainer from "./containers/ReminderFormContainer";

function App() {
  return (
    <section className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ReminderFormContainer} />
          <Route exact path="/details" component={RemainderDetailsContainer} />
        </Switch>
      </Router>
    </section>
  );
}

export default App;
