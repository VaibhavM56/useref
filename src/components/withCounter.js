import React from "react";

function withCounter(PassedComponents, initialCount = 0) {
  class WrappedComponent extends React.Component {
    state = {
      count: initialCount,
    };

    incrementCount = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    decrement = () => {
      this.setState({
        count: this.state.count - 1,
      });
    };

    render() {
      return (
        <PassedComponents
          count={this.state.count}
          increment={this.incrementCount}
          decrement={this.decrement}
          {...this.props}
        />
      );
    }
  }
  return WrappedComponent;
}

export default withCounter;
