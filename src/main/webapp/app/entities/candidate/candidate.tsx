// removed th id primary key
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './candidate.reducer';
import { ICandidate } from 'app/shared/model/candidate.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICandidateProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Candidate = (props: ICandidateProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const handleSyncList = () => {
    props.getEntities();
  };

  const { candidateList, match, loading } = props;
  return (
    <div>
      <h2 id="candidate-heading" data-cy="CandidateHeading">
        <Translate contentKey="assessmentApp.candidate.home.title">Candidates</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="assessmentApp.candidate.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="assessmentApp.candidate.home.createLabel">Create new Candidate</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {candidateList && candidateList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="assessmentApp.candidate.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidate.firstName">First Name</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidate.lastName">Last Name</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidate.email">Email</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidate.latestTestScore">Latest Test Score</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidate.lastTestDate">Last Test Date</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidate.registrationDate">Registration Date</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidate.registrationCount">Registration Count</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidate.testTakenCount">Test Taken Count</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidate.canTakeTest">Can Take Test</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidate.user">User</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {candidateList.map((candidate, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${candidate.id}`} color="link" size="sm">
                      {candidate.id}
                    </Button>
                  </td>
                  <td>{candidate.firstName}</td>
                  <td>{candidate.lastName}</td>
                  <td>{candidate.email}</td>
                  <td>{candidate.latestTestScore}</td>
                  <td>
                    {candidate.lastTestDate ? (
                      <TextFormat type="date" value={candidate.lastTestDate} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {candidate.registrationDate ? (
                      <TextFormat type="date" value={candidate.registrationDate} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{candidate.registrationCount}</td>
                  <td>{candidate.testTakenCount}</td>
                  <td>{candidate.canTakeTest ? 'true' : 'false'}</td>
                  <td>{candidate.user ? candidate.user.id : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${candidate.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${candidate.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${candidate.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="assessmentApp.candidate.home.notFound">No Candidates found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ candidate }: IRootState) => ({
  candidateList: candidate.entities,
  loading: candidate.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Candidate);
