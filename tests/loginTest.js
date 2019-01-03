var expectations = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/expectations/Expectations.js');
var mainPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/MainPage.js');
var emailPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/EmailPage.js');
var loginPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/LoginPage.js');
describe("Yandex login", function() {

    beforeEach(function() {
        expectations.timeoutAngular()
    })

    afterEach(function() {
        mainPage.clearHistory("https://yandex.by/");
    })

    it ("Input login and password, check user", function() {
        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickEnter();
        loginPage.inputLogin("AutotestUser");
        loginPage.clickEnterButton();
        loginPage.inputPass("AutotestUser123");
        loginPage.clickEnterButton();
        emailPage.checkUser();
        emailPage.clickUser();
        emailPage.logout();
    })

    it("Login and logout", function() {
        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickEnter();
        //loginPage.inputLogin("AutotestUser");
        //loginPage.clickEnterButton();
        loginPage.inputPass("AutotestUser123");
        loginPage.clickEnterButton();
        emailPage.clickUser();
        emailPage.logout();
        mainPage.elementMissing();
    })
})