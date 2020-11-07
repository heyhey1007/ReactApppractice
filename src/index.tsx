import React from "react";
import { render } from "react-dom";
import "./App.css";

interface H2OProps {}
interface H2OState {
  temp: number;
}

class H2O extends React.Component<H2OProps, H2OState> {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }
  H2OState(temp) {
    if (temp <= 0) {
      return "ice";
    }
    if (temp > 0 && temp < 100) {
      return "water";
    }
    if (temp >= 100) {
      return "steam";
    }
    return "water";
  }

  render() {
    const { temp } = this.state;
    return (
      <div className={this.H2OState(temp)}>
        <h2>
          phase: {this.H2OState(temp)}, {temp}
        </h2>
        <h2>{temp}度</h2>
        <button onClick={this.onMinusClick}>-1</button>
        <button onClick={this.onPlusClick}>+1</button>
        <button onClick={this.onMinusTenClick}>-10</button>
        <button onClick={this.onPlusTenClick}>+10</button>
      </div>
    );
  }

  onPlusClick = () => {
    this.setState({ temp: this.state.temp + 1 });
  };
  onMinusClick = () => {
    this.setState({ temp: this.state.temp - 1 });
  };
  onPlusTenClick = () => {
    this.setState({ temp: this.state.temp + 10 });
  };
  onMinusTenClick = () => {
    this.setState({ temp: this.state.temp - 10 });
  };
}

render(<H2O />, document.getElementById("root"));
