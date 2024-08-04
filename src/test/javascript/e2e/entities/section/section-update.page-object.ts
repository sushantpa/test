import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class SectionUpdatePage {
  pageTitle: ElementFinder = element(by.id('assessmentApp.section.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  sectionQuestionInput: ElementFinder = element(by.css('input#section-sectionQuestion'));
  sectionNumberHeadingInput: ElementFinder = element(by.css('input#section-sectionNumberHeading'));
  sectionNumberInput: ElementFinder = element(by.css('input#section-sectionNumber'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setSectionQuestionInput(sectionQuestion) {
    await this.sectionQuestionInput.sendKeys(sectionQuestion);
  }

  async getSectionQuestionInput() {
    return this.sectionQuestionInput.getAttribute('value');
  }

  async setSectionNumberHeadingInput(sectionNumberHeading) {
    await this.sectionNumberHeadingInput.sendKeys(sectionNumberHeading);
  }

  async getSectionNumberHeadingInput() {
    return this.sectionNumberHeadingInput.getAttribute('value');
  }

  async setSectionNumberInput(sectionNumber) {
    await this.sectionNumberInput.sendKeys(sectionNumber);
  }

  async getSectionNumberInput() {
    return this.sectionNumberInput.getAttribute('value');
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
    await this.setSectionQuestionInput('sectionQuestion');
    expect(await this.getSectionQuestionInput()).to.match(/sectionQuestion/);
    await waitUntilDisplayed(this.saveButton);
    await this.setSectionNumberHeadingInput('sectionNumberHeading');
    expect(await this.getSectionNumberHeadingInput()).to.match(/sectionNumberHeading/);
    await waitUntilDisplayed(this.saveButton);
    await this.setSectionNumberInput('5');
    expect(await this.getSectionNumberInput()).to.eq('5');
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
