module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-spec-reporter')
    ],
    browsers: ['Chrome'],
    customLaunchers: {
      Headless_Chrome: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--disable-gpu'
        ]
      }
    },
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    // files: [
    //   {
    //     pattern: './src/test.ts',
    //     included: true,
    //     watched: false
    //   }
    // ],
    // preprocessors: {
    //   './src/test.ts': ['@angular/cli']
    // },
    // mime: {
    //   'text/x-typescript': ['ts', 'tsx']
    // },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ["progress", "spec", "kjhtml"],
    specReporter: {
        maxLogLines: 5,             // limit number of lines logged per test
        suppressErrorSummary: true, // do not print error summary
        suppressFailed: false,      // do not print information about failed tests
        suppressPassed: false,      // do not print information about passed tests
        suppressSkipped: true,      // do not print information about skipped tests
        showSpecTiming: false,      // print the time elapsed for each spec
        failFast: true              // test would finish with error when a first fail occurs. 
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    captureTimeout: 210000,
    browserDisconnectTolerance: 3, 
    browserDisconnectTimeout : 210000,
    browserNoActivityTimeout : 210000
  });
};