const { storeValueCommand } = require('./src/store-value')
const { retrieveValueCommand } = require('./src/retrieve-value')
const { storePluginSetupCommand } = require('./src/plugin-setup')
const { clearPluginSetupCommand } = require('./src/clear-plugin')

// register a new custom command cy.storeValue and cy.retrieveValue
Cypress.Commands.add('storeValue', storeValueCommand('storeValue'))
Cypress.Commands.add('retrieveValue', retrieveValueCommand('retrieveValue'))
Cypress.Commands.add('storePluginSetup', storePluginSetupCommand('storePluginSetup'))
Cypress.Commands.add('clearPluginSetup', clearPluginSetupCommand('clearPluginSetup'))