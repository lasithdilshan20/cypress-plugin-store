const storeValueCommand = (name) => (element,variableName) => {
    cy.log(`**${name}**`)
    const filename = 'cypress/fixtures/variables.json';
    cy.readFile(filename).then((json) => {
        cy.get(element).invoke("text").then(($el) => {
            json[variableName] = $el;
            cy.writeFile(filename, json);
        })
    })
}

module.exports = { storeValueCommand }