# cypress-plugin-store [![ci status][ci image]][ci url] [![renovate-app badge][renovate-badge]][renovate-app] ![cypress version](https://img.shields.io/badge/cypress-13.4.0-brightgreen)

> Store values during the executions and retrieve in any test case in the same spec file.

**Note: Support with both CSS  Selectors and Xpath**

Please install and configure the Xpath plugin as below:

https://www.npmjs.com/package/@cypress/xpath

## install

```
npm i -D cypress-plugin-store
# or
yarn add -D cypress-plugin-store
```

## use

### Simple

Include from your Cypress support file or individual spec (cypress > support > e2e.js)

```js
import 'cypress-plugin-store/commands'
```

Then use the custom command `cy.storePluginSetup()` to initialize the plugin.

**Note: Recommended inside the `before` hook.**

```js
before(() => {
    cy.storePluginSetup();
})
```

Then use the custom command `cy.storeValue`

**Note: Support with both CSS  Selectors and Xpath**

```js
cy.storeValue(element_locator,variable_Name)
```
Example:
```js
it('Store the Variables', () => {
    cy.visit('cypress/index.html')
    cy.get('#fname').type('John')
    cy.get('#lname').type('Doe')
    cy.storeValue('#fname','firstName')
    cy.storeValue('#lname','lastName')
    cy.storeValue(`//input[@id='city']`,'city')
})
```

Then use the custom command `cy.retrieveValue`

```js
cy.retrieveValue(variable_Name).then((var_) => {
    // Do something with the var_
})
```
Example:
```js
 it('retrieve First name the elements', () => {
    cy.retrieveValue('firstName').then((firstName) => {
        cy.log('This is First Name'+firstName);
    })
})

it('retrieve Last name the elements', () => {
    cy.retrieveValue('lastName').then((lastName) => {
        cy.log('This is '+lastName);
    })
})

it('retrieve city the xpath elements', () => {
    cy.retrieveValue('city').then((city) => {
        cy.log('This is '+city);
    })
})
```

Finally, use the custom command `cy.clearPluginSetup()` to clear the plugin. **(IF needed)**

**Note: Recommended inside the `after` hook.**

```js
after(() => {
    cy.clearPluginSetup();
})
```

[ci image]: https://github.com/lasithdilshan20/cypress-plugin-store/workflows/ci/badge.svg?branch=main
[ci url]: https://github.com/lasithdilshan20/cypress-plugin-store/actions
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/

## Small print

Author: Lasitha Wijenayake &lt;lasithdilshan20@gmail.com&gt; &copy; 2022

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email
[open issue](https://github.com/lasithdilshan20/cypress-plugin-store/issues) on Github

## MIT License

Copyright (c) 2022 Lasitha Wijenayake &lt;lasithdislahan20@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.