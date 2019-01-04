var expectations = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/expectations/Expectations.js');
var mainPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/MainPage.js');
var emailPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/EmailPage.js');
var loginPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/LoginPage.js');
describe("Yandex login", function() {

    beforeEach(function() {
        expectations.timeoutAngular();
    })

    afterEach(function() {
        mainPage.clearHistory("https://yandex.by/");
    })

    it ("Input login and password, check user", function() {
        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickLoginEnterButton();
        loginPage.inputLogin("AutotestUser");
        loginPage.clickEnterEmailButton();
        loginPage.inputPass("AutotestUser123");
        loginPage.clickEnterEmailButton();

        expectations.isClickable(emailPage.userNameField);
        expect(emailPage.userNameField.getText()).toEqual('AutotestUser');
    })

    it("Login and logout", function() {
        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickLoginEnterButton();
        //loginPage.inputLogin("AutotestUser");
        //loginPage.clickEnterEmailButton();
        loginPage.inputPass("AutotestUser123");
        loginPage.clickEnterEmailButton();
        emailPage.clickUserName();
        emailPage.logout();

        expectations.isClickable(mainPage.enterEmailButton);
        expect(mainPage.enterEmailButton.isPresent()).toBe(true);
    })

    it ("Invalid password", function () {
        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickLoginEnterButton();
        //loginPage.inputLogin("AutotestUser");
        //loginPage.clickEnterEmailButton();
        loginPage.inputPass("NoAutotestUser123");
        loginPage.clickEnterEmailButton();

        expect(loginPage.wrongPasswordMessage.getText()).toEqual("Неверный пароль. Не помню пароль");
    })

    it ("Invalid login", function() {
        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickLoginEnterButton();
        loginPage.clickOnUserOnLoginPage();
        loginPage.inputLogin("NoAutotestUser");
        loginPage.clickEnterEmailButton();
        //loginPage.inputPass("AutotestUser123");
        //loginPage.clickEnterEmailButton();

        expect(loginPage.wrongLoginMessage.getText()).toEqual("Такого аккаунта нет");
    })
})