const storeValueCommand = (name) => (element,variableName) => {
    cy.log(`**${name}**`)
    const filename = 'src/variables.json';
    cy.readFile(filename,{log: false}).then((json) => {
        cy.get(element).invoke('text').then(($el) => {
            json[variableName] = $el;
            if ($el === '') {
                delete json[variableName];
                cy.get(element).invoke('val').then(($el) => {
                    json[variableName] = $el;
                })
            }
            cy.writeFile(filename, json,{log: false});
        })
    })
}

module.exports = { storeValueCommand }