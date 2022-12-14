const storeValueCommand = (name) => (element,variableName) => {
    cy.log(`**${name}**`)
    const filename = 'cypress/fixtures/variables.json';
    cy.readFile(filename).then((json) => {
        cy.get(element).then(($el) => {
            json[variableName] = $el.val();
            cy.writeFile(filename, json);
        })
    })
}

module.exports = { storeValueCommand }