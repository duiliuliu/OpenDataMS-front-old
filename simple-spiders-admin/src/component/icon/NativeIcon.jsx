import React from "react";
import PropTypes from "prop-types";
import IconTypesMap from "../../constant/ImagesConstant";

export default class NativeIcon extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    alt: PropTypes.string
  };

  static defaultProps = {
    width: 56,
    height: 56,
    className: "icons",
    alt: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width ? this.props.width : 56,
      height: this.props.height ? this.props.height : 56
    };
  }

  render() {
    const path = IconTypesMap[this.props.type];
    return (
      <img
        className={this.props.className}
        type={this.props.type}
        style={{ width: this.props.width, height: this.props.height }}
        src={path}
        alt={this.props.alt}
      />
    );
  }
}
