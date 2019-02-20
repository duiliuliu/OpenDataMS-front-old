import React from "react";
import { Route, Redirect } from "react-router-dom";
import JobScheduler from "../container/jobscheduler/JobScheduler";
import NewJobScheduler from "../container/jobscheduler/NewJobScheduler";
import CurrentJobScheduler from "../container/jobscheduler/CurrentJobScheduler";
import JobSchedulerManager from "../container/jobscheduler/JobSchedulerManager";
import Dataview from "../container/dataview/DataView";
import DataManager from "../container/dataview/DataManager";
import FunctionRegister from "../container/dataview/FunctionRegister";
import FunctionManager from "../container/dataview/FunctionManager";
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
        <Route exact path={LinkConstant.JobSchedulerManager} component={JobSchedulerManager} />
        <Route exact path={LinkConstant.DataView} component={Dataview} />
        <Route exact path={LinkConstant.DataManager} component={DataManager} />
        <Route exact path={LinkConstant.FunctionRegister} component={FunctionRegister} />
        <Route exact path={LinkConstant.FunctionManager} component={FunctionManager} />
        <Route exact path={LinkConstant.History} component={History} />
      </div>
    );
  }
}
