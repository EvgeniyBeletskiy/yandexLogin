var expectations = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/expectations/Expectations.js');
var mainPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/MainPage.js');
var emailPage = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/yandexPage/EmailPage.js');

describe("Yandex login", function() {

    beforeEach(function() {
        expectations.timeoutAngular();
        mainPage.clearHistory("https://yandex.by/");
    })

    it ("Input login and password", function() {
        mainPage.goToMainPage("https://yandex.by/");
        mainPage.clickEnter();
        mainPage.inputLoginPass();
        emailPage.checkUser();
    })

    /*it("Input login and password", function() {
        browser.waitForAngularEnabled(false);
        browser.get("https://yandex.ru/");
        element(by.css(".desk-notif-card__login-enter-expanded")).click();
        element(by.name("login")).sendKeys("AutotestUser");
        element(by.name("passwd")).sendKeys("AutotestUser123");
        element(by.css(".passport-Button-Text")).click();
        element(by.css("#recipient-1")).click();
        element(by.linkText("Выйти из сервисов Яндекса")).click();
    })*/
})