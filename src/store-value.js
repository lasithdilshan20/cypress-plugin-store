const storeValueCommand = (name) => (element,variableName) => {
    cy.log(`**${name}**`)
    cy.get(element).then(($el) => {
        cy.writeFile('cypress/fixtures/variables.json', { [variableName]: $el.val() })
    })
}

module.exports = { storeValueCommand }