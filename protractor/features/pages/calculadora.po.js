'use strict'
// protractor/features/pages/calculadoraPage.js

class CalculadoraPage {
    constructor() {
        this.firstField = element(by.model('first')),
            this.secondField = element(by.model('second')),
            this.goButton = element(by.id('gobutton')),
            this.colResult = element(by.cssContainingText('.table', 'Result')),
            this.result = element(by.binding('latest')),
            this.table = element(by.css('.table th')),
            this.sub = element(by.cssContainingText('option', '-'))
    }

    visit() {
        return browser.get('')
    }

    adicionar(one, two) {
        this.firstField.clear();
        this.firstField.sendKeys(one);
        this.secondField.clear();
        this.secondField.sendKeys(two);
        return this.goButton.click();
    }

    subtrair(one, two) {
        this.firstField.clear();
        this.firstField.sendKeys(one);
        this.secondField.clear();
        this.secondField.sendKeys(two);
        this.sub.click();
        return this.goButton.click();
    }
};

module.exports = CalculadoraPage;