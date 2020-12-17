import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushi: [],
    position: 0,
    eatenPlates: [],
    moneyLeft: 100,
    servingSushi: 4,
  };

  async componentDidMount() {
    const response = await fetch(API);
    const sushi = await response.json();
    this.setState({ sushi });
  }

  handleSushiRotation = () => {
    this.setState({
      position:
        this.state.position + this.state.servingSushi >= this.state.sushi.length
          ? this.state.position +
            this.state.servingSushi -
            this.state.sushi.length
          : this.state.position + this.state.servingSushi,
    });
  };

  //if position > sushi.length
  //subtract 100 from position

  addPlates = (price, id) => {
    this.setState({
      eatenPlates: [...this.state.eatenPlates, id],
      moneyLeft: this.state.moneyLeft - price,
    });
  };

  serveSushi = () => {
    if (
      this.state.position + this.state.servingSushi >
      this.state.sushi.length
    ) {
      const plus =
        this.state.servingSushi -
        (this.state.sushi.length - this.state.position);
      console.log(this.state.position);
      console.log(plus);
      return [
        ...this.state.sushi.slice(this.state.position, this.state.sushi.length),
        ...this.state.sushi.slice(0, plus),
      ];
    }
    return this.state.sushi.slice(
      this.state.position,
      this.state.position + this.state.servingSushi
    );
  };

  servingSushiChangeHandler = (event) => {
    this.setState({
      servingSushi: +event.target.value,
    });
  };

  addCashHandler = (cash) => {
    this.setState({
      moneyLeft: this.state.moneyLeft + cash,
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.serveSushi()}
          handleSushiRotation={this.handleSushiRotation}
          addPlates={this.addPlates}
          moneyLeft={this.state.moneyLeft}
          eatenPlates={this.state.eatenPlates}
          servingSushi={this.state.servingSushi}
          servingSushiChangeHandler={this.servingSushiChangeHandler}
        />
        <Table
          eatenPlates={this.state.eatenPlates}
          moneyLeft={this.state.moneyLeft}
          addCashHandler={this.addCashHandler}
        />
      </div>
    );
  }
}

export default App;
