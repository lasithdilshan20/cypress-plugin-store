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

module.exports = { registerCommand, registerRetrieveCommand }