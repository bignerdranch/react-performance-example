import React, { Component } from 'react';
import restaurants from './restaurants.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: restaurants,
    };
  }

  render() {
    const { restaurants } = this.state;
    return (
      <div>
        <h1>Restaurants</h1>
        <ul>
          { restaurants.map(r => <li>{ r.name }</li>) }
        </ul>
      </div>
    );
  }
}

export default App;
