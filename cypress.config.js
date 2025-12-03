const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    viewportWidth: 1366,
    viewportHeight: 768,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },
});


module.exports.e2e = {
  ...module.exports.e2e,
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  retries: 2,
  testIsolation: false
};
