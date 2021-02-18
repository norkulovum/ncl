const {SpecReporter} = require('jasmine-spec-reporter/built/main');
const { browser } = require('protractor');
let HtmlReporter = require('protractor-beautiful-reporter');

module.exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        '**/**/*.e2e-spec.ts'
    ],
    capabilities: {
        browserName: 'chrome',
    },
    directConnect: true,

    baseUrl: 'https://www.ncl.com/',

    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
    },

    SELENIUM_PROMISE_MANAGER: false,

    onPrepare() {
        require('ts-node/dist/index').register({
            project: 'tsconfig.json',
        });
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'src/e2e/out',
            screenshotsSubfolder: 'images',
            gatherBrowserLogs: 'true',
            preserveDirectory: false,
        }).getJasmine2Reporter());

        jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
    }
};
