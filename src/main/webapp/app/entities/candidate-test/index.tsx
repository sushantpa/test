import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import CandidateTest from './candidate-test';
import CandidateTestDetail from './candidate-test-detail';
import CandidateTestUpdate from './candidate-test-update';
import CandidateTestDeleteDialog from './candidate-test-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CandidateTestUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={CandidateTestUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={CandidateTestDetail} />
      <ErrorBoundaryRoute path={match.url} component={CandidateTest} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={CandidateTestDeleteDialog} />
  </>
);

export default Routes;
