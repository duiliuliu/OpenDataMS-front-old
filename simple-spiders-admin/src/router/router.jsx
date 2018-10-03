import React from "react";
import { Route, Redirect } from "react-router-dom";
import JobScheduler from "../component/jobscheduler/JobScheduler";
import Dataview from "../component/dataview/DataView";
import History from "../component/history/History";
import Home from "../component/home/Home";
import * as LinkConstant from '../constant/LinkConstant'

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <Route path='/' exact render={() => (<Redirect to={LinkConstant.Home} />)} />
        <Route exact path={LinkConstant.Home} component={Home} />
        <Route exact path={LinkConstant.JobScheduler} component={JobScheduler} />
        <Route exact path={LinkConstant.DataView} component={Dataview} />
        <Route exact path={LinkConstant.History} component={History} />
      </div>
    );
  }
}
