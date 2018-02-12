import React, { Component } from 'react';
import RestaurantList from './RestaurantList';
import RestaurantDetail from './RestaurantDetail';
import restaurants from './restaurants.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: restaurants,
      selectedRestaurant: null,
    };
  }

  handleSelect(selectedRestaurant) {
    this.setState({ selectedRestaurant });
  }

  handleBack() {
    this.setState({ selectedRestaurant: null });
  }

  render() {
    const { restaurants, selectedRestaurant } = this.state;
    return (
      <div>
        { selectedRestaurant
          ? <RestaurantDetail
              restaurant={selectedRestaurant}
              onBack={() => this.handleBack()}
            />
          : <RestaurantList
              restaurants={restaurants}
              onSelect={restaurant => this.handleSelect(restaurant)}
            />
        }
      </div>
    );
  }
}

export default App;
