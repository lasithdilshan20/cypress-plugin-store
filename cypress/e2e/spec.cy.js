// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

Cypress.Commands.add('storePluginSetup', () => {
    cy.log('**storeSetup**')
    const filename = 'src/variables.json';
    //Write the file with all access
    cy.writeFile(filename, {}, {flag: 'w+', log: false});
})
Cypress.Commands.add('storeValue', (element,variableName) => {
  cy.log('**storeValue**')
    const filename = 'src/variables.json';
    cy.readFile(filename,{log: false}).then((json) => {
        cy.get(element).invoke("text").then(($el) => {
            json[variableName] = $el;
            cy.writeFile(filename, json,{log: false});
        })
    })
})

Cypress.Commands.add('retrieveValue', (variableName) => {
    cy.log('**retrieveValue**')
    // Javascript/typescript function to get the value of a variable from a json file
    cy.readFile('src/variables.json',{log: false}).its(variableName).then((value) => {
        // Use the value here
        cy.log(value)
    })
    cy.readFile('src/variables.json',{log: false}).then((json) => {
        //return the value of the variableName key as string
        return cy.wrap(json[variableName]);
    })
})

Cypress.Commands.add('clearPluginSetup', () => {
    cy.log('**clearSetup**')
    const filename = 'src/variables.json';
    //Delete content of the file
    cy.writeFile(filename, {},{log: false});
})

describe('cypress-plugin-store', () => {
    before(() => {
        cy.storePluginSetup();
    })
    after(() => {
        //cy.clearPluginSetup();
    })
  it('store the elements', () => {
    // path with respect to the root folder
    cy.visit('cypress/index.html')
    cy.get('#fname').type('John')
      cy.get('#lname').type('Doe')
    cy.storeValue('#lbl_fname','firstName')
      cy.storeValue('#lname','lastName')
  })

    it('retrieve the elements', () => {
        cy.retrieveValue('firstName').then((x) => {
            cy.log('Out spec '+x);
        })
        cy.retrieveValue('lastName').then((x) => {
            cy.log('lastName Out spec '+x);
        })
    })
})