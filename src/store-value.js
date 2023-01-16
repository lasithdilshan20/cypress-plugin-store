const storeValueCommand = (name) => (element, variableName) => {
  cy.log(`**${name}**`);
  const filename = "src/variables.json";
  if (element.includes("/")) {
    cy.readFile(filename, {
      log: false,
    }).then((json) => {
      cy.xpath(element)
        .invoke("text")
        .then(($el) => {
          json[variableName] = $el;
          if ($el === "") {
            delete json[variableName];
            cy.xpath(element)
              .invoke("val")
              .then(($el) => {
                json[variableName] = $el;
              });
          }
          cy.writeFile(filename, json, { log: false });
        });
    });
  } else {
    cy.readFile(filename, {
      log: false,
    }).then((json) => {
      cy.get(element)
        .invoke("text")
        .then(($el) => {
          json[variableName] = $el;
          if ($el === "") {
            delete json[variableName];
            cy.get(element)
              .invoke("val")
              .then(($el) => {
                json[variableName] = $el;
              });
          }
          cy.writeFile(filename, json, { log: false });
        });
    });
  }
};

module.exports = { storeValueCommand };
