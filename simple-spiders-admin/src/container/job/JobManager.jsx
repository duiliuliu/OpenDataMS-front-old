import React from "react";
import JobManagerComponent from "../../component/job/JobManager";
import { connect } from "react-redux";
import { getJobList } from "../../action/JobAction";

class JobManager extends React.Component {
  render() {
    return <JobManagerComponent data={this.props.data}  />;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.JobReduce.data
  };
};

const mapDispatchToProps = dispatch => {
  return dispatch(getJobList())
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobManager);
