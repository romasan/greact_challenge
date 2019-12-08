import React, { Component } from "react";
import PropTypes from "prop-types";

class ClockProvider extends Component {
  constructor( ) {
    super();
    this.state = {
      timer: 1,
    };
  }

  static childContextTypes = {
    timer: PropTypes.number,
  }

  getChildContext() {
    return { 
      timer: this.state.timer
    };
  }

  componentDidMount( ) {
    this.timer = setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState(state => ({ timer: state.timer + 1 }));
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render( ) {
    return this.props.children
  }
}

export default ClockProvider;