import React from 'react';
import PropTypes from "prop-types";
import G2 from '@antv/g2';

export default class Bar extends React.Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    xy: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
  }

  state = {
    chart: ''
  }


  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     chart: new G2.Chart({
  //       container: 'basicbar',
  //       width: nextProps.width,
  //       height: nextProps.height
  //     })
  //   }, () => {
  //     this.state.chart.source(nextProps.data);
  //     this.state.chart.coord().transpose();
  //     this.state.chart.interval().position(nextProps.xy);
  //     this.state.chart.render();
  //   });
  // }

  componentDidMount() {
    this.setState({
      chart: new G2.Chart({
        container: 'basicbar',
        width: this.props.width,
        height: this.props.height
      })
    }, () => {
      this.state.chart.source(this.props.data);
      this.state.chart.coord().transpose();
      this.state.chart.interval().position(this.props.xy);
      this.state.chart.render();
    });
  }

  render() {
    return (
      <div id='basicbar'>
      </div>
    );
  }
}
