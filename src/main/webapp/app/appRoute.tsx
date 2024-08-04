import React from 'react';
import { Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import CandidateLogin from 'app/modules/candidateLogin/login';
import AdminLogin from 'app/modules/adminLogin/login';
import Logout from 'app/modules/login/logout';
import CandidateHome from 'app/modules/candidateHome/home';
import AdminHome from 'app/modules/admin-home/Admin';
import AddNewCandidate from 'app/modules/addnewcandidate/addnewcandidate';
import ViewCandidateDetails from 'app/modules/viewcandidatedetails/viewcandidatedetails';
import PrivateRoute from 'app/shared/auth/private-route';
import PrivateAdminRoute from 'app/shared/auth/private-route-admin';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';
import { AUTHORITIES } from 'app/config/constants';
import Assessment from 'app/modules/assessment/assessment';
import Submission from './modules/candidateLogin/submission';

const Account = Loadable({
  loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
  loading: () => <div>loading ...</div>,
});

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => <div>loading ...</div>,
});

const Routes = () => {
  return (
    <div className="view-routes">
      <Switch>
        <ErrorBoundaryRoute path="/candidate/login" exact component={CandidateLogin} />
        <ErrorBoundaryRoute path="/logout" exact component={Logout} />
        <ErrorBoundaryRoute path="/submit" exact component={Submission} />
        <PrivateRoute exact path="/" component={CandidateHome} hasAnyAuthorities={[AUTHORITIES.USER]} />
        <PrivateRoute path="/assessment" component={Assessment} hasAnyAuthorities={[AUTHORITIES.USER]} />
        <ErrorBoundaryRoute path="/admin/login" exact component={AdminLogin} />
        <PrivateAdminRoute path="/admin/candidate/:id" component={ViewCandidateDetails} hasAnyAuthorities={[AUTHORITIES.ADMIN]} />
        <PrivateAdminRoute path="/admin" component={AdminHome} hasAnyAuthorities={[AUTHORITIES.ADMIN]} />
        <PrivateAdminRoute path="/addnewcandidate" component={AddNewCandidate} hasAnyAuthorities={[AUTHORITIES.ADMIN]} />
        <ErrorBoundaryRoute component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
