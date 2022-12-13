const retrieveValueCommand = (name) => (variableName) => {
    cy.log(`**${name}**`)
    cy.readFile('cypress/fixtures/variables.json').its(variableName).then((value) => {
        cy.log(value)
    })
    cy.readFile('cypress/fixtures/variables.json').then((json) => {
        return json[variableName]
    })
}

module.exports = { retrieveValueCommand }