import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';
import { reducer as reduxFormReducer } from 'redux-form';
import locale, { LocaleState } from './locale';
import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
// prettier-ignore
import candidate, {
  CandidateState
} from 'app/entities/candidate/candidate.reducer';
// prettier-ignore
import candidateTest, {
  CandidateTestState
} from 'app/entities/candidate-test/candidate-test.reducer';
// prettier-ignore
import section, {
  SectionState
} from 'app/entities/section/section.reducer';
// prettier-ignore
import question, {
  QuestionState
} from 'app/entities/question/question.reducer';
// prettier-ignore
import candidateAnswer, {
  CandidateAnswerState
} from 'app/entities/candidate-answer/candidate-answer.reducer';
import questionType, { QuestionTypeState } from 'app/entities/question-type/question-type.reducer';
import candidateDetail, { CandidateDetailState } from 'app/entities/page/page.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly userManagement: UserManagementState;
  readonly register: RegisterState;
  readonly activate: ActivateState;
  readonly passwordReset: PasswordResetState;
  readonly password: PasswordState;
  readonly settings: SettingsState;
  readonly candidate: CandidateState;
  readonly candidateTest: CandidateTestState;
  readonly section: SectionState;
  readonly question: QuestionState;
  readonly candidateAnswer: CandidateAnswerState;
  readonly loadingBar: any;
  readonly form: any;
  readonly questionType: QuestionTypeState;
  readonly candidateDetail: CandidateDetailState;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  locale,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  candidate,
  candidateTest,
  section,
  question,
  candidateAnswer,
  loadingBar,
  form: reduxFormReducer,
  questionType,
  candidateDetail,
});

export default rootReducer;
