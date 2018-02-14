import React from 'react';
import { mount } from 'cypress-react-unit-test';
import NewRestaurantForm from '../../src/NewRestaurantForm';

describe('<NewRestaurantForm />', () => {
  describe('clicking the save button', () => {
    let spy;

    beforeEach(() => {
      spy = cy.spy();
      mount(<NewRestaurantForm onSave={spy} />);

      cy.get("[data-test='newRestaurantName']")
        .type('Sushi Place');

      cy.get("[data-test='saveButton']")
        .click();
    });

    it('clears the text field', () => {
      cy.get("[data-test='newRestaurantName']")
        .should('have.value', '');
    });

    it('emits the "save" event', () => {
      expect(spy).to.have.been.calledWith('Sushi Place');
    });
  });
});
