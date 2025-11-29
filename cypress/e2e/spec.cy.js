describe('Calculator Functionality', () => {

    beforeEach(() => {
    cy.visit('/')
  })

  it('5 + 3 = 8 ?', () => {
    cy.get('#btn-5').click();
    cy.get('#btn-add').click();
    cy.get('#btn-3').click();
    cy.get('#btn-equal').click();
    
    cy.get('#display').should('have.value', '8');
  });

  it('10 - 4 = 6 ?', () => {
    cy.get('#btn-1').click();
    cy.get('#btn-0').click();
    cy.get('#btn-sub').click();
    cy.get('#btn-4').click();
    cy.get('#btn-equal').click();

    cy.get('#display').should('have.value', '6');
  });

  it('6 * 7 = 42 ?', () => {
    cy.get('#btn-6').click();
    cy.get('#btn-mul').click();
    cy.get('#btn-7').click();
    cy.get('#btn-equal').click();

    cy.get('#display').should('have.value', '42');
  });

  it('15 / 3 = 5 ?', () => {
    cy.get('#btn-1').click();
    cy.get('#btn-5').click();
    cy.get('#btn-div').click();
    cy.get('#btn-3').click();
    cy.get('#btn-equal').click();

    cy.get('#display').should('have.value', '5');
  });

  it('5E3 = 5000 ?', () => {
  cy.get('#btn-5').click();
  cy.get('#btn-e').click();
  cy.get('#btn-3').click();
  cy.get('#btn-equal').click();

  cy.get('#display').should('have.value', '5000');
});

});