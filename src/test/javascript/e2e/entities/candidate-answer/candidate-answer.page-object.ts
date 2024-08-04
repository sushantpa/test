import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import CandidateAnswerUpdatePage from './candidate-answer-update.page-object';

const expect = chai.expect;
export class CandidateAnswerDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('assessmentApp.candidateAnswer.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-candidateAnswer'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class CandidateAnswerComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('candidate-answer-heading'));
  noRecords: ElementFinder = element(by.css('#app-view-container .table-responsive div.alert.alert-warning'));
  table: ElementFinder = element(by.css('#app-view-container div.table-responsive > table'));

  records: ElementArrayFinder = this.table.all(by.css('tbody tr'));

  getDetailsButton(record: ElementFinder) {
    return record.element(by.css('a.btn.btn-info.btn-sm'));
  }

  getEditButton(record: ElementFinder) {
    return record.element(by.css('a.btn.btn-primary.btn-sm'));
  }

  getDeleteButton(record: ElementFinder) {
    return record.element(by.css('a.btn.btn-danger.btn-sm'));
  }

  async goToPage(navBarPage: NavBarPage) {
    await navBarPage.getEntityPage('candidate-answer');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateCandidateAnswer() {
    await this.createButton.click();
    return new CandidateAnswerUpdatePage();
  }

  async deleteCandidateAnswer() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const candidateAnswerDeleteDialog = new CandidateAnswerDeleteDialog();
    await waitUntilDisplayed(candidateAnswerDeleteDialog.deleteModal);
    expect(await candidateAnswerDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/assessmentApp.candidateAnswer.delete.question/);
    await candidateAnswerDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(candidateAnswerDeleteDialog.deleteModal);

    expect(await isVisible(candidateAnswerDeleteDialog.deleteModal)).to.be.false;
  }
}
