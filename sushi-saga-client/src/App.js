import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    position: [0, 4]
  }

  handleSushiRotation = () => {
    console.log("Hi")
    this.setState({
      position: [ this.state.position[0] + 4, this.state.position[1] + 4]
    })
  }

  async componentDidMount(){
    const response = await fetch(API)
    const sushi = await response.json()
    this.setState({ sushi })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushi={this.state.sushi.slice(this.state.position[0], this.state.position[1])}
          handleSushiRotation={this.handleSushiRotation}
        />
        <Table />
      </div>
    );
  }
}

export default App;