// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
Cypress.Commands.add('storeValue', (element,variableName) => {
  cy.log('**storeValue**')
  //Store value in a variable and use it later
    cy.get(element).then(($el) => {
        // Store the value in a json file under variableName json key
        cy.writeFile('cypress/fixtures/variables.json', { [variableName]: $el.val() })
    })
})


Cypress.Commands.add('retrieveValue', (variableName) => {
    cy.log('**retrieveValue**')
    // Javascript/typescript function to get the value of a variable from a json file
    cy.readFile('cypress/fixtures/variables.json').its(variableName).then((value) => {
        // Use the value here
        cy.log(value)
    })
    cy.readFile('cypress/fixtures/variables.json').then((json) => {
            //return the value of the variableName key as string
            return json[variableName]
        })
})

describe('cypress-plugin-store', () => {
  it('store the elements', () => {
    // path with respect to the root folder
    cy.visit('cypress/index.html')
    cy.get('#fname').type('John Doe')
    cy.storeValue('#fname','firstName')
  })

    it('retrieve the elements', () => {
        const x = cy.retrieveValue('firstName');
        cy.log('Out spec '+x);
    })
})