import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import SectionComponentsPage from './section.page-object';
import SectionUpdatePage from './section-update.page-object';
import {
  waitUntilDisplayed,
  waitUntilAnyDisplayed,
  click,
  getRecordsCount,
  waitUntilHidden,
  waitUntilCount,
  isVisible,
} from '../../util/utils';

const expect = chai.expect;

describe('Section e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let sectionComponentsPage: SectionComponentsPage;
  let sectionUpdatePage: SectionUpdatePage;
  const username = process.env.E2E_USERNAME ?? 'admin';
  const password = process.env.E2E_PASSWORD ?? 'admin';

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();
    await signInPage.username.sendKeys(username);
    await signInPage.password.sendKeys(password);
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
    await waitUntilDisplayed(navBarPage.adminMenu);
    await waitUntilDisplayed(navBarPage.accountMenu);
  });

  beforeEach(async () => {
    await browser.get('/');
    await waitUntilDisplayed(navBarPage.entityMenu);
    sectionComponentsPage = new SectionComponentsPage();
    sectionComponentsPage = await sectionComponentsPage.goToPage(navBarPage);
  });

  it('should load Sections', async () => {
    expect(await sectionComponentsPage.title.getText()).to.match(/Sections/);
    expect(await sectionComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete Sections', async () => {
    const beforeRecordsCount = (await isVisible(sectionComponentsPage.noRecords)) ? 0 : await getRecordsCount(sectionComponentsPage.table);
    sectionUpdatePage = await sectionComponentsPage.goToCreateSection();
    await sectionUpdatePage.enterData();

    expect(await sectionComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(sectionComponentsPage.table);
    await waitUntilCount(sectionComponentsPage.records, beforeRecordsCount + 1);
    expect(await sectionComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await sectionComponentsPage.deleteSection();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(sectionComponentsPage.records, beforeRecordsCount);
      expect(await sectionComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(sectionComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
