import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class QuestionUpdatePage {
  pageTitle: ElementFinder = element(by.id('assessmentApp.question.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  questionInput: ElementFinder = element(by.css('input#question-question'));
  questionNumberInput: ElementFinder = element(by.css('input#question-questionNumber'));
  aInput: ElementFinder = element(by.css('input#question-a'));
  bInput: ElementFinder = element(by.css('input#question-b'));
  cInput: ElementFinder = element(by.css('input#question-c'));
  dInput: ElementFinder = element(by.css('input#question-d'));
  eInput: ElementFinder = element(by.css('input#question-e'));
  answerInput: ElementFinder = element(by.css('input#question-answer'));
  sectionSelect: ElementFinder = element(by.css('select#question-section'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setQuestionInput(question) {
    await this.questionInput.sendKeys(question);
  }

  async getQuestionInput() {
    return this.questionInput.getAttribute('value');
  }

  async setQuestionNumberInput(questionNumber) {
    await this.questionNumberInput.sendKeys(questionNumber);
  }

  async getQuestionNumberInput() {
    return this.questionNumberInput.getAttribute('value');
  }

  async setAInput(a) {
    await this.aInput.sendKeys(a);
  }

  async getAInput() {
    return this.aInput.getAttribute('value');
  }

  async setBInput(b) {
    await this.bInput.sendKeys(b);
  }

  async getBInput() {
    return this.bInput.getAttribute('value');
  }

  async setCInput(c) {
    await this.cInput.sendKeys(c);
  }

  async getCInput() {
    return this.cInput.getAttribute('value');
  }

  async setDInput(d) {
    await this.dInput.sendKeys(d);
  }

  async getDInput() {
    return this.dInput.getAttribute('value');
  }

  async setEInput(e) {
    await this.eInput.sendKeys(e);
  }

  async getEInput() {
    return this.eInput.getAttribute('value');
  }

  async setAnswerInput(answer) {
    await this.answerInput.sendKeys(answer);
  }

  async getAnswerInput() {
    return this.answerInput.getAttribute('value');
  }

  async sectionSelectLastOption() {
    await this.sectionSelect.all(by.tagName('option')).last().click();
  }

  async sectionSelectOption(option) {
    await this.sectionSelect.sendKeys(option);
  }

  getSectionSelect() {
    return this.sectionSelect;
  }

  async getSectionSelectedOption() {
    return this.sectionSelect.element(by.css('option:checked')).getText();
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
    await this.setQuestionInput('question');
    expect(await this.getQuestionInput()).to.match(/question/);
    await waitUntilDisplayed(this.saveButton);
    await this.setQuestionNumberInput('questionNumber');
    expect(await this.getQuestionNumberInput()).to.match(/questionNumber/);
    await waitUntilDisplayed(this.saveButton);
    await this.setAInput('a');
    expect(await this.getAInput()).to.match(/a/);
    await waitUntilDisplayed(this.saveButton);
    await this.setBInput('b');
    expect(await this.getBInput()).to.match(/b/);
    await waitUntilDisplayed(this.saveButton);
    await this.setCInput('c');
    expect(await this.getCInput()).to.match(/c/);
    await waitUntilDisplayed(this.saveButton);
    await this.setDInput('d');
    expect(await this.getDInput()).to.match(/d/);
    await waitUntilDisplayed(this.saveButton);
    await this.setEInput('e');
    expect(await this.getEInput()).to.match(/e/);
    await waitUntilDisplayed(this.saveButton);
    await this.setAnswerInput('answer');
    expect(await this.getAnswerInput()).to.match(/answer/);
    await this.sectionSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
