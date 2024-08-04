import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CandidateAnswer from './candidate-answer';
import CandidateAnswerDetail from './candidate-answer-detail';
import CandidateAnswerUpdate from './candidate-answer-update';
import CandidateAnswerDeleteDialog from './candidate-answer-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CandidateAnswerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CandidateAnswerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CandidateAnswerDetail} />
      <ErrorBoundaryRoute path={match.url} component={CandidateAnswer} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CandidateAnswerDeleteDialog} />
  </>
);

export default Routes;
