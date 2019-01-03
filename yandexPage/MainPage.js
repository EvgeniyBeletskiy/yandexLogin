var expectations = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/expectations/Expectations.js');
var enterEmailButton = element(by.css(".desk-notif-card__login-enter-expanded"));
var emailField = element(by.name("login"));
var passField = element(by.name("passwd"));
var enteredButton = element(by.buttonText("Войти"));

var MainPage = function() {
    this.goToMainPage = function(url) {
        browser.get(url);
    }

    this.clickEnter = function() {
        expectations.waitElement(enterEmailButton);
        enterEmailButton.click();
    }

    this.inputLoginPass = function () {
        expectations.waitElement(emailField);
        emailField.sendKeys("AutotestUser");
        expectations.isClickable(enteredButton);
        enteredButton.click();
        expectations.waitElement(passField);
        passField.sendKeys("AutotestUser123");
        expectations.isClickable(enteredButton);
        enteredButton.click();
    }

    this.clearHistory = function(url) {
        browser.get(url);
        browser.executeScript('window.localStorage.clear();'); 
        browser.executeScript('window.sessionStorage.clear();'); 
        browser.driver.manage().deleteAllCookies();
    }

}
module.exports = new MainPage();