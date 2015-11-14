
import React from 'react';

export default class Counter extends React.Component {

  static defaultProps = {
    count: 0
  };

  constructor(props) {
    super(props);
    this.state = {count: this.props.count};
    // Manually bind this method to the component instance...
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount(e) {
    this.setState({count: this.state.count + 1});
  }

  decrementCount(e) {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div>
         <h2>React Counter {this.state.count}&nbsp;</h2>
         <button onClick={this.incrementCount}>Increment</button> &nbsp;
         <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }

}
