// @ts-check
/// <reference path="../../src/index.d.ts" />
import '../../commands'
describe('cypress-plugin-store', () => {

    before(() => {
        cy.storePluginSetup();
    })

    it('Store the Variables', () => {
        cy.visit('cypress/index.html')
        cy.get('#fname').type('John')
        cy.get('#lname').type('Doe')
        cy.storeValue('#fname','firstName')
        cy.storeValue('#lname','lastName')
    })

    it('retrieve First name the elements', () => {
        cy.retrieveValue('firstName').then((firstName) => {
            cy.log('Out spec '+firstName);
        })
    })

    it('retrieve Last name the elements', () => {
        cy.retrieveValue('lastName').then((lastName) => {
            cy.log('Last Name -- '+lastName);
        })
    })

    after(() => {
        //cy.clearPluginSetup();
    })
})