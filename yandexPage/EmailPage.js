var mainPage = require('./MainPage');
var expectations = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/expectations/Expectations.js');
var userNameField = element(by.css(".mail-User-Name"));
var logoutButton = element(by.css("#nb-4 > div > div > div:nth-child(7) > a"));
var EmailPage = function () {
    /*this.checkUserName = function () {
        expectations.isClickable(userNameField);
        expect(userNameField.getText()).toEqual('AutotestUser');
    }*/

    this.clickUserName = function () {
        expectations.isClickable(userNameField);
        userNameField.click();
    }

    this.logout = function () {
        expectations.isClickable(logoutButton);
        logoutButton.click();
    }
};
module.exports = new EmailPage();
module.exports.userNameField = userNameField;