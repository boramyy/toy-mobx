import React, { Component } from "react";
import { action, observable } from "mobx";
import { observer } from "mobx-react";

@observer
class Counter extends Component {
  @observable number = 0;

  @action
  increase = () => {
    this.number++;
  };

  @action
  decrease = () => {
    this.number--;
  };

  render() {
    return (
      <div>
        <h1>counter! {this.number}</h1>
        <button onClick={this.increase}>플</button>
        <button onClick={this.decrease}>마</button>
      </div>
    );
  }
}

export default Counter;
