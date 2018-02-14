import React, { Component } from 'react';

export default class NewRestaurantForm extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          data-test="newRestaurantName"
        />
      </div>
    );
  }
}
