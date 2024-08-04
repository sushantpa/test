import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Candidate from './candidate';
import CandidateTest from './candidate-test';
import Section from './section';
import Question from './question';
import CandidateAnswer from './candidate-answer';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}candidate`} component={Candidate} />
      <ErrorBoundaryRoute path={`${match.url}candidate-test`} component={CandidateTest} />
      <ErrorBoundaryRoute path={`${match.url}section`} component={Section} />
      <ErrorBoundaryRoute path={`${match.url}question`} component={Question} />
      <ErrorBoundaryRoute path={`${match.url}candidate-answer`} component={CandidateAnswer} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
