const storeValueCommand = (name) => (element,variableName) => {
    cy.log(`**${name}**`)
    const filename = 'src/variables.json';

    if (element.startsWith('/')) {
        cy.xpath(element).then(($el) => {
            const value = $el.text() || $el.val();
            cy.readFile(filename,{log: false}).then((json) => {
                json[variableName] = value;
                cy.writeFile(filename, json,{log: false});
            });
        });
    } else {
        cy.get(element).then(($el) => {
            const value = $el.text() || $el.val();
            cy.readFile(filename,{log: false}).then((json) => {
                json[variableName] = value;
                cy.writeFile(filename, json,{log: false});
            });
        });
    }
}

module.exports = { storeValueCommand }