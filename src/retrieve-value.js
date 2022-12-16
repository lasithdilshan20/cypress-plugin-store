const retrieveValueCommand = (name) => (variableName) => {
    cy.log(`**${name}**`)
    cy.readFile('src/variables.json').its(variableName).then((value) => {
        cy.log(value,{log: false})
    })
    cy.readFile('src/variables.json').then((json) => {
        return cy.wrap(json[variableName]);
    })
}

module.exports = { retrieveValueCommand }