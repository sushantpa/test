import { element, by, ElementFinder, protractor } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class CandidateTestUpdatePage {
  pageTitle: ElementFinder = element(by.id('assessmentApp.candidateTest.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  testCompletionDateInput: ElementFinder = element(by.css('input#candidate-test-testCompletionDate'));
  testScoreInput: ElementFinder = element(by.css('input#candidate-test-testScore'));
  testScheduledDateInput: ElementFinder = element(by.css('input#candidate-test-testScheduledDate'));
  questionsAttemptedInput: ElementFinder = element(by.css('input#candidate-test-questionsAttempted'));
  remainingTimeInput: ElementFinder = element(by.css('input#candidate-test-remainingTime'));
  testStartDateTimeInput: ElementFinder = element(by.css('input#candidate-test-testStartDateTime'));
  testEndDateTimeInput: ElementFinder = element(by.css('input#candidate-test-testEndDateTime'));
  candidateSelect: ElementFinder = element(by.css('select#candidate-test-candidate'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setTestCompletionDateInput(testCompletionDate) {
    await this.testCompletionDateInput.sendKeys(testCompletionDate);
  }

  async getTestCompletionDateInput() {
    return this.testCompletionDateInput.getAttribute('value');
  }

  async setTestScoreInput(testScore) {
    await this.testScoreInput.sendKeys(testScore);
  }

  async getTestScoreInput() {
    return this.testScoreInput.getAttribute('value');
  }

  async setTestScheduledDateInput(testScheduledDate) {
    await this.testScheduledDateInput.sendKeys(testScheduledDate);
  }

  async getTestScheduledDateInput() {
    return this.testScheduledDateInput.getAttribute('value');
  }

  async setQuestionsAttemptedInput(questionsAttempted) {
    await this.questionsAttemptedInput.sendKeys(questionsAttempted);
  }

  async getQuestionsAttemptedInput() {
    return this.questionsAttemptedInput.getAttribute('value');
  }

  async setRemainingTimeInput(remainingTime) {
    await this.remainingTimeInput.sendKeys(remainingTime);
  }

  async getRemainingTimeInput() {
    return this.remainingTimeInput.getAttribute('value');
  }

  async setTestStartDateTimeInput(testStartDateTime) {
    await this.testStartDateTimeInput.sendKeys(testStartDateTime);
  }

  async getTestStartDateTimeInput() {
    return this.testStartDateTimeInput.getAttribute('value');
  }

  async setTestEndDateTimeInput(testEndDateTime) {
    await this.testEndDateTimeInput.sendKeys(testEndDateTime);
  }

  async getTestEndDateTimeInput() {
    return this.testEndDateTimeInput.getAttribute('value');
  }

  async candidateSelectLastOption() {
    await this.candidateSelect.all(by.tagName('option')).last().click();
  }

  async candidateSelectOption(option) {
    await this.candidateSelect.sendKeys(option);
  }

  getCandidateSelect() {
    return this.candidateSelect;
  }

  async getCandidateSelectedOption() {
    return this.candidateSelect.element(by.css('option:checked')).getText();
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
    await this.setTestCompletionDateInput('01-01-2001');
    expect(await this.getTestCompletionDateInput()).to.eq('2001-01-01');
    await waitUntilDisplayed(this.saveButton);
    await this.setTestScoreInput('5');
    expect(await this.getTestScoreInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setTestScheduledDateInput('01-01-2001');
    expect(await this.getTestScheduledDateInput()).to.eq('2001-01-01');
    await waitUntilDisplayed(this.saveButton);
    await this.setQuestionsAttemptedInput('questionsAttempted');
    expect(await this.getQuestionsAttemptedInput()).to.match(/questionsAttempted/);
    await waitUntilDisplayed(this.saveButton);
    await this.setRemainingTimeInput('remainingTime');
    expect(await this.getRemainingTimeInput()).to.match(/remainingTime/);
    await waitUntilDisplayed(this.saveButton);
    await this.setTestStartDateTimeInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await this.getTestStartDateTimeInput()).to.contain('2001-01-01T02:30');
    await waitUntilDisplayed(this.saveButton);
    await this.setTestEndDateTimeInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await this.getTestEndDateTimeInput()).to.contain('2001-01-01T02:30');
    await this.candidateSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
