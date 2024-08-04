import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class CandidateUpdatePage {
  pageTitle: ElementFinder = element(by.id('assessmentApp.candidate.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  firstNameInput: ElementFinder = element(by.css('input#candidate-firstName'));
  lastNameInput: ElementFinder = element(by.css('input#candidate-lastName'));
  emailInput: ElementFinder = element(by.css('input#candidate-email'));
  latestTestScoreInput: ElementFinder = element(by.css('input#candidate-latestTestScore'));
  lastTestDateInput: ElementFinder = element(by.css('input#candidate-lastTestDate'));
  registrationDateInput: ElementFinder = element(by.css('input#candidate-registrationDate'));
  registrationCountInput: ElementFinder = element(by.css('input#candidate-registrationCount'));
  testTakenCountInput: ElementFinder = element(by.css('input#candidate-testTakenCount'));
  canTakeTestInput: ElementFinder = element(by.css('input#candidate-canTakeTest'));
  userSelect: ElementFinder = element(by.css('select#candidate-user'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setFirstNameInput(firstName) {
    await this.firstNameInput.sendKeys(firstName);
  }

  async getFirstNameInput() {
    return this.firstNameInput.getAttribute('value');
  }

  async setLastNameInput(lastName) {
    await this.lastNameInput.sendKeys(lastName);
  }

  async getLastNameInput() {
    return this.lastNameInput.getAttribute('value');
  }

  async setEmailInput(email) {
    await this.emailInput.sendKeys(email);
  }

  async getEmailInput() {
    return this.emailInput.getAttribute('value');
  }

  async setLatestTestScoreInput(latestTestScore) {
    await this.latestTestScoreInput.sendKeys(latestTestScore);
  }

  async getLatestTestScoreInput() {
    return this.latestTestScoreInput.getAttribute('value');
  }

  async setLastTestDateInput(lastTestDate) {
    await this.lastTestDateInput.sendKeys(lastTestDate);
  }

  async getLastTestDateInput() {
    return this.lastTestDateInput.getAttribute('value');
  }

  async setRegistrationDateInput(registrationDate) {
    await this.registrationDateInput.sendKeys(registrationDate);
  }

  async getRegistrationDateInput() {
    return this.registrationDateInput.getAttribute('value');
  }

  async setRegistrationCountInput(registrationCount) {
    await this.registrationCountInput.sendKeys(registrationCount);
  }

  async getRegistrationCountInput() {
    return this.registrationCountInput.getAttribute('value');
  }

  async setTestTakenCountInput(testTakenCount) {
    await this.testTakenCountInput.sendKeys(testTakenCount);
  }

  async getTestTakenCountInput() {
    return this.testTakenCountInput.getAttribute('value');
  }

  getCanTakeTestInput() {
    return this.canTakeTestInput;
  }
  async userSelectLastOption() {
    await this.userSelect.all(by.tagName('option')).last().click();
  }

  async userSelectOption(option) {
    await this.userSelect.sendKeys(option);
  }

  getUserSelect() {
    return this.userSelect;
  }

  async getUserSelectedOption() {
    return this.userSelect.element(by.css('option:checked')).getText();
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }

  async enterData() {
    await waitUntilDisplayed(this.saveButton);
    await this.setFirstNameInput('firstName');
    expect(await this.getFirstNameInput()).to.match(/firstName/);
    await waitUntilDisplayed(this.saveButton);
    await this.setLastNameInput('lastName');
    expect(await this.getLastNameInput()).to.match(/lastName/);
    await waitUntilDisplayed(this.saveButton);
    await this.setEmailInput('email');
    expect(await this.getEmailInput()).to.match(/email/);
    await waitUntilDisplayed(this.saveButton);
    await this.setLatestTestScoreInput('5');
    expect(await this.getLatestTestScoreInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setLastTestDateInput('01-01-2001');
    expect(await this.getLastTestDateInput()).to.eq('2001-01-01');
    await waitUntilDisplayed(this.saveButton);
    await this.setRegistrationDateInput('01-01-2001');
    expect(await this.getRegistrationDateInput()).to.eq('2001-01-01');
    await waitUntilDisplayed(this.saveButton);
    await this.setRegistrationCountInput('5');
    expect(await this.getRegistrationCountInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setTestTakenCountInput('5');
    expect(await this.getTestTakenCountInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    const selectedCanTakeTest = await this.getCanTakeTestInput().isSelected();
    if (selectedCanTakeTest) {
      await this.getCanTakeTestInput().click();
      expect(await this.getCanTakeTestInput().isSelected()).to.be.false;
    } else {
      await this.getCanTakeTestInput().click();
      expect(await this.getCanTakeTestInput().isSelected()).to.be.true;
    }
    await this.userSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
