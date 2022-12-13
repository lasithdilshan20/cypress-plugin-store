// @ts-check
/// <reference path="../../src/index.d.ts" />
import '../../commands'
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