import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import CandidateTestComponentsPage from './candidate-test.page-object';
import CandidateTestUpdatePage from './candidate-test-update.page-object';
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

describe('CandidateTest e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let candidateTestComponentsPage: CandidateTestComponentsPage;
  let candidateTestUpdatePage: CandidateTestUpdatePage;
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
    candidateTestComponentsPage = new CandidateTestComponentsPage();
    candidateTestComponentsPage = await candidateTestComponentsPage.goToPage(navBarPage);
  });

  it('should load CandidateTests', async () => {
    expect(await candidateTestComponentsPage.title.getText()).to.match(/Candidate Tests/);
    expect(await candidateTestComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete CandidateTests', async () => {
    const beforeRecordsCount = (await isVisible(candidateTestComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(candidateTestComponentsPage.table);
    candidateTestUpdatePage = await candidateTestComponentsPage.goToCreateCandidateTest();
    await candidateTestUpdatePage.enterData();

    expect(await candidateTestComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(candidateTestComponentsPage.table);
    await waitUntilCount(candidateTestComponentsPage.records, beforeRecordsCount + 1);
    expect(await candidateTestComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await candidateTestComponentsPage.deleteCandidateTest();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(candidateTestComponentsPage.records, beforeRecordsCount);
      expect(await candidateTestComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(candidateTestComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
