var expectations = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/expectations/Expectations.js');
var enterEmailButton = element(by.css(".desk-notif-card__login-enter-expanded"));

var MainPage = function() {
    this.goToMainPage = function(url) {
        browser.get(url);
    }

    this.clickLoginEnterButton = function() {
        expectations.isClickable(enterEmailButton);
        enterEmailButton.click();
    }


    this.clearHistory = function(url) {
        browser.get(url);
        browser.executeScript('window.localStorage.clear()'); 
        browser.executeScript('window.sessionStorage.clear()'); 
        browser.driver.manage().deleteAllCookies();
    }

    this.elementMissing = function() {
        expect(enterEmailButton.isPresent()).toBe(true);
    }

}
module.exports = new MainPage();
module.exports.enterEmailButton = enterEmailButton;