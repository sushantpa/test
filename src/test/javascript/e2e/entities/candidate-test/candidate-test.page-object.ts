import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import CandidateTestUpdatePage from './candidate-test-update.page-object';

const expect = chai.expect;
export class CandidateTestDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('assessmentApp.candidateTest.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-candidateTest'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class CandidateTestComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('candidate-test-heading'));
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
    await navBarPage.getEntityPage('candidate-test');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateCandidateTest() {
    await this.createButton.click();
    return new CandidateTestUpdatePage();
  }

  async deleteCandidateTest() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const candidateTestDeleteDialog = new CandidateTestDeleteDialog();
    await waitUntilDisplayed(candidateTestDeleteDialog.deleteModal);
    expect(await candidateTestDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/assessmentApp.candidateTest.delete.question/);
    await candidateTestDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(candidateTestDeleteDialog.deleteModal);

    expect(await isVisible(candidateTestDeleteDialog.deleteModal)).to.be.false;
  }
}
