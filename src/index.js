const { clearPluginSetupCommand } = require('./clear-plugin')
const { storePluginSetupCommand } = require('./plugin-setup')
const { storeValueCommand } = require('./store-value')
const { retrieveValueCommand } = require('./retrieve-value')

const registerCommand = (name = 'storeValue') => {
    const storeValue = storeValueCommand(name);
    Cypress.Commands.add(name, storeValue);

}
const registerRetrieveCommand = (name = 'retrieveValue') => {
    const retrieveValue = retrieveValueCommand(name);
    Cypress.Commands.add(name, retrieveValue);

}

const registerPluginSetupCommand = (name = 'storePluginSetup') => {
    const storePluginSetup = storePluginSetupCommand(name);
    Cypress.Commands.add(name, storePluginSetup);
}

const registerClearPluginSetupCommand = (name = 'clearPluginSetup') => {
    const clearPluginSetup = clearPluginSetupCommand(name);
    Cypress.Commands.add(name, clearPluginSetup);
}

module.exports = { registerCommand, registerRetrieveCommand,registerPluginSetupCommand,registerClearPluginSetupCommand }