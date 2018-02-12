import React from 'react';
import { Heading } from './atoms';

const RestaurantDetail = ({ restaurant, onBack }) =>
  <div>
    <Heading>{ restaurant.name }</Heading>
    <button onClick={onBack}>Back</button>
    <DishList dishes={restaurant.dishes} />
  </div>;

const DishList = ({ dishes }) =>
  <ul>
    { dishes.map(d => <li key={d.id}>{ d.name }</li>) }
  </ul>;

export default RestaurantDetail;
