var expectations = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/expectations/Expectations.js');
var enterEmailButton = element(by.css(".desk-notif-card__login-enter-expanded"));
var videoLink = element(by.xpath("//a[. = 'Видео' ]"));
var imageLink = element(by.xpath("//a[. = 'Картинки' ]"));
var newsLink = element(by.xpath("//a[. = 'Новости' ]"));
var mapLink = element(by.xpath("//a[. = 'Карты' ]"));
var marketLink = element(by.xpath("//a[. = 'Маркет' ]"));
var translateLink = element(by.xpath("//a[. = 'Переводчик' ]"));
var musicLink = element(by.xpath("//a[. = 'Музыка' ]"));
var button = element(by.css(".websearch-button > .websearch-button__text"));


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

    this.clickVideoLink = function () {
        expectations.isClickable(videoLink);
        videoLink.click();
        expectations.waitUrl("video");
    }

    this.clickImageLink = function () {
        expectations.isClickable(imageLink);
        imageLink.click();
        expectations.waitUrl('image');
    }

    this.clickNewsLink = function () {
        expectations.isClickable(newsLink);
        newsLink.click();
        expectations.waitUrl("news");
    }

    this.clickMapLink = function () {
        expectations.isClickable(mapLink);
        mapLink.click();
        expectations.waitUrl("map");
    }

    this.clickMarketLink = function () {
        expectations.isClickable(marketLink);
        marketLink.click();
        expectations.waitUrl("market");
    }

    this.clickTranslateLink = function () {
        expectations.isClickable(translateLink);
        translateLink.click();
        expectations.waitUrl("translate");
    }

    this.clickMusicLink = function () {
        expectations.isClickable(musicLink);
        musicLink.click();
        expectations.waitUrl("music");
    }

}
module.exports = new MainPage();
module.exports.enterEmailButton = enterEmailButton;