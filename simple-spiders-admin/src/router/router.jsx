import React from "react";
import { Route } from "react-router-dom";
import JobScheduler from "../component/jobscheduler/JobScheduler";
import Dataview from "../component/dataview/DataView";
import History from "../component/history/History";
import Home from "../component/home/Home";

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/jobscheduler" component={JobScheduler} />
        <Route exact path={"/dataview"} component={Dataview} />
        <Route exact path={"/history"} component={History} />
      </div>
    );
  }
}
