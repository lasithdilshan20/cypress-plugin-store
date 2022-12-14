const storePluginSetupCommand = (name) => () => {
    cy.log(`**${name}**`)
    const filename = 'cypress/fixtures/variables.json';
    cy.writeFile(filename, {}, {flag: 'w+'});
}

module.exports = { storePluginSetupCommand }