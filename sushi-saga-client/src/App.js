import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushi: [],
    position: [0, 4],
    eatenPlates: [1, 2],
    moneyLeft: 100,
  };

  handleSushiRotation = () => {
    this.setState({
      position:
        this.state.position[0] + 4 === 100
          ? [0, 4]
          : [this.state.position[0] + 4, this.state.position[1] + 4],
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

  async componentDidMount() {
    const response = await fetch(API);
    const sushi = await response.json();
    this.setState({ sushi });
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.sushi.slice(
            this.state.position[0],
            this.state.position[1]
          )}
          handleSushiRotation={this.handleSushiRotation}
          addPlates={this.addPlates}
          moneyLeft={this.state.moneyLeft}
          eatenPlates={this.state.eatenPlates}
        />
        <Table
          eatenPlates={this.state.eatenPlates}
          moneyLeft={this.state.moneyLeft}
        />
      </div>
    );
  }
}

export default App;
