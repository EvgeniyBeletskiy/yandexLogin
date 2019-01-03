var mainPage = require('./MainPage');
var expectations = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/expectations/Expectations.js');
var userNameField = element(by.css(".mail-User-Name"));
var EmailPage = function () {
    this.checkUser = function () {
        expectations.waitElement(userNameField);
        expect(userNameField.getText()).toEqual('AutotestUser');
    }
}
module.exports = new EmailPage();