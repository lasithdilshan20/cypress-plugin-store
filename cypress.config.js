const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "cx1p9k",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      fixturesFolder: true
    },
  },
});
