describe('Creating a restaurant', () => {
  it('adds the restaurant to the list', () => {
    cy.visit('http://localhost:8080/');

    cy.get("[data-test='addRestaurantButton']")
      .click();

    cy.get("[data-test='newRestaurantName']")
      .type('Steak Place');

    cy.get("[data-test='saveButton']")
      .click();

    cy.contains('Steak Place');
  });
});
