import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import CandidateAnswerComponentsPage from './candidate-answer.page-object';
import CandidateAnswerUpdatePage from './candidate-answer-update.page-object';
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

describe('CandidateAnswer e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let candidateAnswerComponentsPage: CandidateAnswerComponentsPage;
  let candidateAnswerUpdatePage: CandidateAnswerUpdatePage;
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
    candidateAnswerComponentsPage = new CandidateAnswerComponentsPage();
    candidateAnswerComponentsPage = await candidateAnswerComponentsPage.goToPage(navBarPage);
  });

  it('should load CandidateAnswers', async () => {
    expect(await candidateAnswerComponentsPage.title.getText()).to.match(/Candidate Answers/);
    expect(await candidateAnswerComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete CandidateAnswers', async () => {
    const beforeRecordsCount = (await isVisible(candidateAnswerComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(candidateAnswerComponentsPage.table);
    candidateAnswerUpdatePage = await candidateAnswerComponentsPage.goToCreateCandidateAnswer();
    await candidateAnswerUpdatePage.enterData();

    expect(await candidateAnswerComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(candidateAnswerComponentsPage.table);
    await waitUntilCount(candidateAnswerComponentsPage.records, beforeRecordsCount + 1);
    expect(await candidateAnswerComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await candidateAnswerComponentsPage.deleteCandidateAnswer();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(candidateAnswerComponentsPage.records, beforeRecordsCount);
      expect(await candidateAnswerComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(candidateAnswerComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
