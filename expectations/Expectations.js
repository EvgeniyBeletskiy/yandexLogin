var EC = protractor.ExpectedConditions;
var Expectations = function () {
    this.waitElement = function (elementLocator) {
        browser.wait(EC.presenceOf(elementLocator), 3000);
    };

    this.isClickable = function(elementLocator) {
        browser.wait(EC.elementToBeClickable(elementLocator), 5000);
    };

    this.timeoutAngular = function() {
        browser.waitForAngularEnabled(false);
    };

    this.restartBrowserSync = function() {
        browser.restartSync();
    };

    this.restartBrowser = function () {
        browser.restart();
    }

    this.fork = function () {
        browser.forkNewDriverInstance();
    }
}

module.exports = new Expectations();