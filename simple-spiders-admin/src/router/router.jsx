import React from "react";
import { Route, Redirect } from "react-router-dom";
import Job from "../container/job/Job";
import NewJob from "../container/job/NewJob";
import CurrentJob from "../container/job/CurrentJob";
import JobManager from "../container/job/JobManager";
import Dataview from "../container/dataview/DataView";
import DataManager from "../container/dataview/DataManager";
import FunctionRegister from "../container/functionview/FunctionRegister";
import FunctionManager from "../container/functionview/FunctionManager";
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
        <Route exact path={LinkConstant.Job} component={Job} />
        <Route exact path={LinkConstant.NewJob} component={NewJob} />
        <Route exact path={LinkConstant.CurrentJob} component={CurrentJob} />
        <Route exact path={LinkConstant.JobManager} component={JobManager} />
        <Route exact path={LinkConstant.DataView} component={Dataview} />
        <Route exact path={LinkConstant.DataManager} component={DataManager} />
        <Route exact path={LinkConstant.FunctionRegister} component={FunctionRegister} />
        <Route exact path={LinkConstant.FunctionManager} component={FunctionManager} />
        <Route exact path={LinkConstant.History} component={History} />
      </div>
    );
  }
}
