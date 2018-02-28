// protractor/config/cucumber.conf.js

exports.config = {

  directConnect: true,
  //chromeDriver: "C:/chromedriver/chromedriver.exe",
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  baseUrl: 'http://juliemr.github.io/protractor-demo/',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: [
    '../features/*.feature'

  ],
  cucumberOpts: {
    require: [
      '../features/step_definitions/*.js',
    ],
    format: ['json:results.json'],
    profile: false,
    'no-source': true,
  },

  beforeLaunch: function () {
  },
  onPrepare: function () {
  },

  afterLaunch: function () {
    var reporter = require('cucumber-html-reporter');

    var options = {
      theme: 'bootstrap',
      jsonFile: 'results.json',
      output: 'results/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true
    };

    reporter.generate(options);
  },
}