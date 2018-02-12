import React from 'react';
import { Heading } from './atoms';

const RestaurantList = ({ restaurants, onSelect }) =>
  <div>
    <Heading>Restaurants</Heading>
    <ul>
      { restaurants.map(r =>
          <RestaurantListItem
            key={r.id}
            restaurant={r}
            onSelect={onSelect}
          />
        )
      }
    </ul>
  </div>;

const RestaurantListItem = ({ restaurant, onSelect }) =>
  <li onClick={() => onSelect(restaurant)}>
    { restaurant.name }
  </li>;

export default RestaurantList;
