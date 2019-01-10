var expectations = require('C:/Users/anduser/AppData/Roaming/npm/node_modules/protractor/example/yandextests/expectations/Expectations.js');
var languageButton = element(by.css("div.b-langs > div > a"));
var languageElseButton = element(by.css(".popup2_direction_bottom-center > ul > div:nth-child(2) > li > a"));
var languagePopUp = element (by.css(".select__button"));
var languageEnglish = element(by.xpath("// span[. = 'English']"));
var saveLanguageButton = element(by.css(".form__save"));

var LanguagePage = function () {
    this.clickLanguageButton = function () {
        expectations.waitElement(languageButton);
        languageButton.click();
    }
    
    this.clickLaguageElseButton = function () {
        expectations.waitElement(languageElseButton);
        languageElseButton.click();
    }
    
    this.clickLanguagePopUp = function () {
        expectations.waitElement(languagePopUp);
        languagePopUp.click();
        expectations.isClickable(languageEnglish);
        languageEnglish.click();
    }
    
    /*this.clickLanguageEnglish = function () {
        expectations.waitElement(languageEnglish);
        languageEnglish.click();
    }*/

    this.clickSaveLanguageButton = function () {
        expectations.buttonEnable(saveLanguageButton);
        saveLanguageButton.click();
    }

}

module.exports = new LanguagePage();
module.exports.languageButton = languageButton;
