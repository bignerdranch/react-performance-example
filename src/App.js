import React, { Component } from 'react';
import NewRestaurantForm from './NewRestaurantForm';
import restaurants from './restaurants.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: restaurants,
      newRestaurantName: '',
    };
  }

  updateRestaurantName(event) {
    this.setState({ newRestaurantName: event.target.value });
  }

  addRestaurant(newRestaurantName) {
    const { restaurants } = this.state;
    const newRestaurant = { name: newRestaurantName };
    const updatedRestaurants = [newRestaurant, ...restaurants];
    this.setState({
      restaurants: updatedRestaurants,
      newRestaurantName: '',
    });
  }

  render() {
    const { restaurants, newRestaurantName } = this.state;
    return (
      <div>
        <h1>Restaurants</h1>
        <NewRestaurantForm
          onSave={restaurant => this.addRestaurant(restaurant)}
        />
        <ul>
          {
            restaurants.map(r =>
              <li key={r.name}>
                { r.name }
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
