// protractor/features/step_definitions/calculadora.step.js

const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require("chai-as-promised")).expect;
const { browser, ExpectedConditions } = require('protractor')

const CalculadoraPage = require('../pages/calculadora.po.js')
const page = new CalculadoraPage();

Given("que eu esteja na tela de calculos", async function () {
    await page.visit();
    await browser.getTitle().then(title => {
        expect(title)
            .to.equal('Super Calculator')
    })
});

When("eu fizer calculos de adicao", async function () {
    await page.adicionar('10', '20').then();
});

Then("devo visualizar o resultado da adicao", async function () {
    await browser.wait(ExpectedConditions.visibilityOf(page.result), 6000);
    await page.result.getText().then(text => {
        expect(text).to.equal('30')
    })
});

When("eu fizer novos calculos de adicao", async function () {
    await page.adicionar('100', '200')
});

Then("devo visualizar o novo resultado de adicao", async function () {
    await page.result.getText().then(text => {
        expect(text).to.equal('300')
    })
});

When("eu fizer calculos de subtracao", async function () {
    await page.subtrair('200', '100')
});

Then("devo visualizar resultado de subtracao", async function () {
    await page.result.getText().then(text => {
        expect(text).to.equal('100')
    })
});

When("eu fizer novos calculos de subtracao", async function () {
    await page.subtrair('50', '20')
});

Then("devo visualizar o novo resultado de subtracao", async function () {
    await page.result.getText().then(text=>{
        expect(text).to.equal('30')
    })
});