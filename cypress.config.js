const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "hayctx",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      fixturesFolder: true
    },
  },
});
