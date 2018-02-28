// protractor/features/support/env.js

const { setWorldConstructor, setDefaultTimeout, BeforeAll } = require('cucumber')
const { browser } = require('protractor')

setWorldConstructor(() => {
  setDefaultTimeout(60 * 1000);
});

BeforeAll(async () => {
  browser.ignoreSynchronization = true;
  await browser.executeScript(function () {
    return {
      width: window.screen.availWidth,
      height: window.screen.availHeight
    };
  }).then(function (result) {
    browser.driver.manage().window().setSize(result.width, result.height);
    browser.get(browser.baseUrl);
  });
})