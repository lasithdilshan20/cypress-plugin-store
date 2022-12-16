const clearPluginSetupCommand = (name) => () => {
    cy.log(`**${name}**`)
    const filename = 'src/variables.json';
    cy.writeFile(filename, {},{log: false});
}

module.exports = { clearPluginSetupCommand }