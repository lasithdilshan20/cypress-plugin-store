const { storeValueCommand } = require('./src/store-value')
const { retrieveValueCommand } = require('./src/retrieve-value')

// register a new custom command cy.storeValue and cy.retrieveValue
Cypress.Commands.add('storeValue', storeValueCommand('storeValue'))
Cypress.Commands.add('retrieveValue', retrieveValueCommand('retrieveValue'))