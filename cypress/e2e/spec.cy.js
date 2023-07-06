// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

Cypress.Commands.add('storePluginSetup', () => {
    cy.log('**storeSetup**')
    const filename = 'src/variables.json';
    //Write the file with all access
    cy.writeFile(filename, {}, {flag: 'w+', log: false});
})
const filename = 'src/variables.json';

Cypress.Commands.add('storeValue', { prevSubject: false }, (element, variableName) => {
    cy.log('**storeValue**');

    if (element.startsWith('/')) {
        // Xpath
        cy.xpath(element).then(($el) => {
            const value = $el.text() || $el.val();
            cy.readFile(filename,{log: false}).then((json) => {
                json[variableName] = value;
                cy.writeFile(filename, json,{log: false});
            });
        });
    } else {
        // CSS Selector
        cy.get(element).then(($el) => {
            const value = $el.text() || $el.val();
            cy.readFile(filename,{log: false}).then((json) => {
                json[variableName] = value;
                cy.writeFile(filename, json,{log: false});
            });
        });
    }
});

Cypress.Commands.add('retrieveValue', (variableName) => {
    cy.log('**retrieveValue**')
    // Javascript/typescript function to get the value of a variable from a json file
    cy.readFile('src/variables.json',{log: false}).its(variableName).then((value) => {
        // Use the value here
        cy.log(value)
    })
    cy.readFile('src/variables.json',{log: false}).then((json) => {
        //return the value of the variableName key as string
        return cy.wrap(json[variableName]);
    })
})

Cypress.Commands.add('clearPluginSetup', () => {
    cy.log('**clearSetup**')
    const filename = 'src/variables.json';
    //Delete content of the file
    cy.writeFile(filename, {},{log: false});
})

describe('cypress-plugin-store', () => {
    before(() => {
        cy.storePluginSetup();
    })
    after(() => {
        //cy.clearPluginSetup();
    })

  it('store the elements', () => {
    // path with respect to the root folder
      cy.visit('cypress/index.html')
      cy.get('#fname').type('John')
      cy.get('#lname').type('Doe')
      cy.storeValue('#lbl_fname','firstName')
      cy.storeValue('#lname','lastName')

      cy.storeValue('#city','city')
      cy.storeValue('#owner','owner')

      cy.storeValue(`//input[@name="lname"]`,'firstNameXpath')

      cy.storeValue(`//input[@id='city']`,'cityXpath')
        cy.storeValue(`//input[@id='owner']`,'ownerXpath')

  })

    it('retrieve the elements', () => {
        cy.retrieveValue('firstName').then((x) => {
            cy.log('Out spec '+x);
        })
        cy.retrieveValue('lastName').then((x) => {
            cy.log('lastName Out spec '+x);
        })
        cy.retrieveValue('city').then((x) => {
            cy.log('city Out spec '+x);
        })
        cy.retrieveValue('owner').then((x) => {
            cy.log('owner Out spec '+x);
        })
        cy.retrieveValue('firstNameXpath').then((x) => {
            cy.log('firstNameXpath Out spec '+x);
        })
        cy.retrieveValue('cityXpath').then((x) => {
            cy.log('cityXpath Out spec '+x);
        })
        cy.retrieveValue('ownerXpath').then((x) => {
            cy.log('ownerXpath Out spec '+x);
        })
    })
})