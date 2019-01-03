var expectations = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/expectations/Expectations.js');
var mainPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/MainPage.js');
var emailField = element(by.name("login"));
var passField = element(by.name("passwd"));
var enteredButton = element(by.buttonText("Войти"));
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

    this.clickEnterButton = function () {
        expectations.isClickable(enteredButton);
        enteredButton.click();
    }
}
module.exports = new LoginPage();