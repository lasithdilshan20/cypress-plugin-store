const storePluginSetupCommand = (name) => () => {
    cy.log(`**${name}**`)
    const filename = 'src/variables.json';
    cy.writeFile(filename, {}, {flag: 'w+',log: false});
}

module.exports = { storePluginSetupCommand }