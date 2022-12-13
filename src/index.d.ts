// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable {
        storeValue(element: string,variableName: string): Chainable<JQuery<HTMLElement>>
        retrieveValue(variableName: string): Chainable<JQuery<HTMLElement>>
    }
}