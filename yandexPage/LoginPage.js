var expectations = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/expectations/Expectations.js');
var mainPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/MainPage.js');
var emailField = element(by.name("login"));
var passField = element(by.name("passwd"));
var enteredButton = element(by.buttonText("Войти"));
var wrongPasswordMessage = element(by.css(".passp-form-field__error"));
var wrongLoginMessage = element(by.css(".passp-form-field__error"));
var userOnLoginPage = element(by.css(".passp-current-account__avatar"));
var newUserOnLoginPage = element(by.css(".passp-account-list__sign-in-button-text"));
var LoginPage = function() {

    this.inputLogin = function (login) {
        expectations.waitElement(emailField);
        emailField.clear();
        emailField.sendKeys(login);
    }

    this.inputPass = function (password) {
        expectations.waitElement(passField);
        passField.clear();
        passField.sendKeys(password);
    }

    this.clickEnterEmailButton = function () {
        expectations.isClickable(enteredButton);
        enteredButton.click();
    }

    this.clickOnUserOnLoginPage = function () {
        expectations.isClickable(userOnLoginPage);
        userOnLoginPage.click();
        expectations.isClickable(newUserOnLoginPage);
        newUserOnLoginPage.click();
    }
}
module.exports = new LoginPage();
module.exports.wrongPasswordMessage = wrongPasswordMessage;
module.exports.wrongLoginMessage = wrongLoginMessage;