const retrieveValueCommand =
    (name) => (variableName) => {
      cy.log(`**${name}**`)
      cy.readFile('src/variables.json', {log : false})
          .its(variableName)
          .then((value) => {cy.log(value, {log : false})})
      cy.readFile('src/variables.json', {
          log : false
        }).then((json) => { return cy.wrap(json[variableName]); })
    }

                                module.exports = {retrieveValueCommand}