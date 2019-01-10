var expectations = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/expectations/Expectations.js');
var mainPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/MainPage.js');
var emailPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/EmailPage.js');
var loginPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/LoginPage.js');
var languagePage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/LanguagePage.js');
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
        //loginPage.clickAnotherAccount();
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
        //loginPage.clickAnotherAccount();
        //loginPage.inputLogin("AutotestUser");
        //loginPage.clickEnterEmailButton();
        loginPage.inputPass("NoAutotestUser123");
        loginPage.clickEnterEmailButton();

        expect(loginPage.wrongPasswordMessage.getText()).toEqual("Неверный пароль");
    })

    it ("Invalid login", function() {
        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickLoginEnterButton();
        loginPage.clickAnotherAccount();
        loginPage.inputLogin("NoAutotestUser");
        loginPage.clickEnterEmailButton();
        loginPage.inputPass("AutotestUser123");
        loginPage.clickEnterEmailButton();

        expect(loginPage.wrongLoginMessage.getText()).toEqual("Такого аккаунта нет");
    })

    it ("Check hyperlinks", function() {
        expectations.timeoutAngular();
        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickImageLink();
        expect(browser.getCurrentUrl()).toContain('images');
        
        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickNewsLink();
        expect(browser.getCurrentUrl()).toContain("news");

        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickMapLink();
        expect(browser.getCurrentUrl()).toContain("map");

        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickMarketLink();
        expect(browser.getCurrentUrl()).toContain("market");

        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickTranslateLink();
        expect(browser.getCurrentUrl()).toContain("translate");

        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickMusicLink();
        expect(browser.getCurrentUrl()).toContain("music"); 
    })

    it("Check video page", function () {
        mainPage.goToMainPage("https://yandex.by/");
        browser.getAllWindowHandles().then (function(handles) {
            browser.switchTo().window(handles[1]);
            mainPage.clickVideoLink();
            expect(browser.getCurrentUrl()).toContain("video");
        })
    })

    it("Switch language", function () {
        browser.get("https://yandex.by/");
        languagePage.clickLanguageButton();
        languagePage.clickLaguageElseButton();
        languagePage.clickLanguagePopUp();
        //languagePage.clickLanguageEnglish();
        languagePage.clickSaveLanguageButton();

        expectations.waitElement(languagePage.languageButton);
        expect(languagePage.languageButton.getText()).toEqual("Eng");
    })
})