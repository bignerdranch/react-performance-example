import React, { Component } from 'react';

export default class NewRestaurantForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newRestaurantName: '',
    };
  }

  updateRestaurantName(event) {
    this.setState({ newRestaurantName: event.target.value });
  }

  render() {
    const { newRestaurantName } = this.state;
    return (
      <div>
        <input
          type="text"
          data-test="newRestaurantName"
          value={newRestaurantName}
          onChange={e => this.updateRestaurantName(e)}
        />
        <button
          data-test="saveButton"
        >
          Add Restaurant
        </button>
      </div>
    );
  }
}
