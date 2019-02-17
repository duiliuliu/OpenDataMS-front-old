import React from "react";
import { Route, Redirect } from "react-router-dom";
import JobScheduler from "../container/jobscheduler/JobScheduler";
import NewJobScheduler from "../container/jobscheduler/NewJobScheduler";
import CurrentJobScheduler from "../container/jobscheduler/CurrentJobScheduler";
import HistoryJobScheduler from "../container/jobscheduler/HistoryJobScheduler";
import Dataview from "../container/dataview/DataView";
import History from "../container/history/History";
import Home from "../container/home/Home";
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
        <Route exact path={LinkConstant.NewJobScheduler} component={NewJobScheduler} />
        <Route exact path={LinkConstant.CurrentJobScheduler} component={CurrentJobScheduler} />
        <Route exact path={LinkConstant.HistoryJobScheduler} component={HistoryJobScheduler} />
        <Route exact path={LinkConstant.DataView} component={Dataview} />
        <Route exact path={LinkConstant.History} component={History} />
      </div>
    );
  }
}
