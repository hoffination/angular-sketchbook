describe('Local App', () => {
  it('should() - assert that title is correct', () => {
    cy.visit('http://localhost:4200');

    cy.title().should('include', 'Cypress Integration Testing');
  });
});
