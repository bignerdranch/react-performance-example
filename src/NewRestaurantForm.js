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

  handleClick() {
    this.setState({ newRestaurantName: '' });
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
          onClick={() => this.handleClick()}
        >
          Add Restaurant
        </button>
      </div>
    );
  }
}
