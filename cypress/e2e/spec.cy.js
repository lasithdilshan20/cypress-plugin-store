// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
let var_value;
Cypress.Commands.add('getByLabel', (label) => {
  cy.log('**getByLabel**')
  cy.contains('label', label)
      .invoke('attr', 'for')
      .then((id) => {
        cy.get('#' + id)
      })
})

Cypress.Commands.add('storeValue', (element) => {
  cy.log('**storeValue**')
  //Store value in a variable and use it later
    cy.get(element).then(($el) => {
        var_value = $el.val();
        return var_value;
    })
})

describe('cypress-plugin-store', () => {
  it('find the elements', () => {
    // path with respect to the root folder
    cy.visit('cypress/index.html')
    cy.getByLabel('First name:').should('have.value', '').type('Joe')
    cy.getByLabel('First name:').should('have.value', 'Joe')
    cy.getByLabel('Last name:').type('Smith')
    // check the form inputs
    cy.get('form')
        .invoke('serializeArray')
        .should('deep.equal', [
          { name: 'fname', value: 'Joe' },
          { name: 'lname', value: 'Smith' },
        ])
    let x = cy.storeValue('#fname')
    cy.log(x)
  })
})