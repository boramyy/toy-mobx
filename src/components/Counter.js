import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("counter")
@observer
class Counter extends Component {
  render() {
    const {
      counter: { number, increase, decrease }
    } = this.props;
    return (
      <div>
        <h1>counter! {number}</h1>
        <button onClick={increase}>플</button>
        <button onClick={decrease}>마</button>
      </div>
    );
  }
}

export default Counter;
