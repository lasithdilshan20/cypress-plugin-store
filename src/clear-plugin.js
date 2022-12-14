const clearPluginSetupCommand = (name) => () => {
    cy.log(`**${name}**`)
    const filename = 'cypress/fixtures/variables.json';
    cy.writeFile(filename, {});
}

module.exports = { clearPluginSetupCommand }