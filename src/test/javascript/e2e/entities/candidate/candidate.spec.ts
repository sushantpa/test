import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import CandidateComponentsPage from './candidate.page-object';
import CandidateUpdatePage from './candidate-update.page-object';
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

describe('Candidate e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let candidateComponentsPage: CandidateComponentsPage;
  let candidateUpdatePage: CandidateUpdatePage;
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
    candidateComponentsPage = new CandidateComponentsPage();
    candidateComponentsPage = await candidateComponentsPage.goToPage(navBarPage);
  });

  it('should load Candidates', async () => {
    expect(await candidateComponentsPage.title.getText()).to.match(/Candidates/);
    expect(await candidateComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete Candidates', async () => {
    const beforeRecordsCount = (await isVisible(candidateComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(candidateComponentsPage.table);
    candidateUpdatePage = await candidateComponentsPage.goToCreateCandidate();
    await candidateUpdatePage.enterData();

    expect(await candidateComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(candidateComponentsPage.table);
    await waitUntilCount(candidateComponentsPage.records, beforeRecordsCount + 1);
    expect(await candidateComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await candidateComponentsPage.deleteCandidate();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(candidateComponentsPage.records, beforeRecordsCount);
      expect(await candidateComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(candidateComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
