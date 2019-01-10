var EC = protractor.ExpectedConditions;
/*var switchBrowserPage = browser.getAllWindowHandles().then(function (handles) {
    browser.driver.switchTo().window(handles[1]);
    browser.driver.close();
    browser.driver.switchTo().window(handles[0]);
});*/
var Expectations = function () {
    this.waitElement = function (elementLocator) {
        browser.wait(EC.presenceOf(elementLocator), 3000);
    };

    this.isClickable = function(elementLocator) {
        browser.wait(EC.elementToBeClickable(elementLocator), 5000);
    };

    this.timeoutAngular = function() {
        browser.waitForAngularEnabled(false);
        //browser.ignoreSynchronization = false;
    };

    this.restartBrowserSync = function() {
        browser.restartSync();
    };

    this.restartBrowser = function () {
        browser.restart();
    }

    this.waitUrl = function (url) {
        browser.wait(EC.urlContains(url), 5000);
    }

    this.scrollTo = function (elementToScroll) {
        browser.executeScript("arguments[0].scrollIntoView();", elementToScroll)
    }

    this.buttonEnable = function (element) {
        expect(element.isEnabled()).toBe(true);
    }

}

module.exports = new Expectations();
module.exports.EC = EC;
//module.exports.switchBrowserPage = switchBrowserPage;