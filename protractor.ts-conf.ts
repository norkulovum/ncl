import { browser, Config } from 'protractor';
import { SpecReporter } from "jasmine-spec-reporter";
import { Jasmine2HtmlReporter } from 'protractor-jasmine2-html-reporter';

export let config: Config = {
    allScriptsTimeout: 11000,
    specs: [
        '../**/**/*.e2e-spec.ts'
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

    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
          savePath: 'out',
          fileName: 'index',
        }));

        jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
    }
};
