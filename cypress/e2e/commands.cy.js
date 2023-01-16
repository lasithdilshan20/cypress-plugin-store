// @ts-check
/// <reference path="../../src/index.d.ts" />
import '../../commands'
describe('cypress-plugin-store', () => {
  before(() => { cy.storePluginSetup(); })

    it('Store the Variables', () => {
        cy.visit('cypress/index.html')
    cy.get('#fname').type('John')
    cy.get('#lname').type('Doe')
    cy.storeValue('#lbl_fname', 'firstName')
    cy.storeValue('#lname', 'lastName')
    cy.storeValue('#city', 'city')
    cy.storeValue('#owner', 'owner')
    cy.storeValue(`//input[@name="lname"]`, 'firstNameXpath')
    cy.storeValue(`//input[@id='city']`, 'cityXpath')
        cy.storeValue(`//input[@id='owner']`,'ownerXpath')
    })

        it('retrieve First name the elements',
           () => {cy.retrieveValue('firstName').then((firstName) => {
             cy.log('Out spec --' + firstName);
           })})

        it('retrieve Last name the elements',
           () => {cy.retrieveValue('lastName').then((lastName) => {
             cy.log('Last Name -- ' + lastName);
           })})

        it('retrieve City the elements',
           () => {cy.retrieveValue('city').then(
               (city) => { cy.log('City -- ' + city); })})

        it('retrieve Owner the elements',
           () => {cy.retrieveValue('owner').then(
               (owner) => { cy.log('Owner -- ' + owner); })})
        it('retrieve xpath values', function() {
          cy.retrieveValue('firstNameXpath').then((firstNameXpath) => {
            cy.log('firstNameXpath -- ' + firstNameXpath);
          })
          cy.retrieveValue('cityXpath')
              .then((cityXpath) => { cy.log('cityXpath -- ' + cityXpath); })
          cy.retrieveValue('ownerXpath')
              .then((ownerXpath) => { cy.log('ownerXpath -- ' + ownerXpath); })
        });

        after(() => {
                  // cy.clearPluginSetup();
              })
})