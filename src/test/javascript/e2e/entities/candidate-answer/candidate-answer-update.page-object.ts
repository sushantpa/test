import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class CandidateAnswerUpdatePage {
  pageTitle: ElementFinder = element(by.id('assessmentApp.candidateAnswer.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  answerInput: ElementFinder = element(by.css('input#candidate-answer-answer'));
  questionSelect: ElementFinder = element(by.css('select#candidate-answer-question'));
  candidateTestSelect: ElementFinder = element(by.css('select#candidate-answer-candidateTest'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setAnswerInput(answer) {
    await this.answerInput.sendKeys(answer);
  }

  async getAnswerInput() {
    return this.answerInput.getAttribute('value');
  }

  async questionSelectLastOption() {
    await this.questionSelect.all(by.tagName('option')).last().click();
  }

  async questionSelectOption(option) {
    await this.questionSelect.sendKeys(option);
  }

  getQuestionSelect() {
    return this.questionSelect;
  }

  async getQuestionSelectedOption() {
    return this.questionSelect.element(by.css('option:checked')).getText();
  }

  async candidateTestSelectLastOption() {
    await this.candidateTestSelect.all(by.tagName('option')).last().click();
  }

  async candidateTestSelectOption(option) {
    await this.candidateTestSelect.sendKeys(option);
  }

  getCandidateTestSelect() {
    return this.candidateTestSelect;
  }

  async getCandidateTestSelectedOption() {
    return this.candidateTestSelect.element(by.css('option:checked')).getText();
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
    await this.setAnswerInput('answer');
    expect(await this.getAnswerInput()).to.match(/answer/);
    await this.questionSelectLastOption();
    await this.candidateTestSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
