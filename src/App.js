import React, { Component } from 'react';
import Loadable from 'react-loadable';
import RestaurantList from './RestaurantList';
import restaurants from './restaurants.json';

const AsyncRestaurantDetail = Loadable({
  loader: () => import('./RestaurantDetail'),
  loading: () => <p>Loading…</p>,
});

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
          ? <AsyncRestaurantDetail
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
