import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import SectionUpdatePage from './section-update.page-object';

const expect = chai.expect;
export class SectionDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('assessmentApp.section.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-section'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class SectionComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('section-heading'));
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
    await navBarPage.getEntityPage('section');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateSection() {
    await this.createButton.click();
    return new SectionUpdatePage();
  }

  async deleteSection() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const sectionDeleteDialog = new SectionDeleteDialog();
    await waitUntilDisplayed(sectionDeleteDialog.deleteModal);
    expect(await sectionDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/assessmentApp.section.delete.question/);
    await sectionDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(sectionDeleteDialog.deleteModal);

    expect(await isVisible(sectionDeleteDialog.deleteModal)).to.be.false;
  }
}
