// protractor/features/step_definitions/calculadora.step.js
const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require("chai-as-promised")).expect;

const CalculadoraPage = require('../pages/calculadora.po.js')
const page = new CalculadoraPage();

Given('que eu esteja na tela de cálculos', async function () {
    await page.visit();
});

When("eu fizer cálculos de adição", async function () {
    await page.adicionar('10', '20').then();
});

Then("devo visualizar o resultado da adição", async function () {
    await expect(page.result.getText())
            .to.eventually.equal('30')
});

When("eu fizer novos cálculos de adição", async function () {
    await page.adicionar('100', '200')
});

Then("devo visualizar o novo resultado de adição", async function () {
    await expect(page.result.getText())
            .to.eventually.equal('300')
});

When("eu fizer cálculos de subtração", async function () {
    await page.subtrair('200', '100')
});

Then("devo visualizar o resultado de subtração", async function () {
    await expect(page.result.getText())
        .to.eventually.equal('100')
});

When("eu fizer novos cálculos de subtração", async function () {
    await page.subtrair('50', '20')
});

Then("devo visualizar o novo resultado de subtração", async function () {
    await expect(page.result.getText())
        .to.eventually.equal('30')
});