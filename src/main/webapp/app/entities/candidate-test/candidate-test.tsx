// removed th id primary key
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './candidate-test.reducer';
import { ICandidateTest } from 'app/shared/model/candidate-test.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICandidateTestProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const CandidateTest = (props: ICandidateTestProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const handleSyncList = () => {
    props.getEntities();
  };

  const { candidateTestList, match, loading } = props;
  return (
    <div>
      <h2 id="candidate-test-heading" data-cy="CandidateTestHeading">
        <Translate contentKey="assessmentApp.candidateTest.home.title">Candidate Tests</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="assessmentApp.candidateTest.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="assessmentApp.candidateTest.home.createLabel">Create new Candidate Test</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {candidateTestList && candidateTestList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="assessmentApp.candidateTest.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidateTest.testCompletionDate">Test Completion Date</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidateTest.testScore">Test Score</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidateTest.testScheduledDate">Test Scheduled Date</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidateTest.questionsAttempted">Questions Attempted</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidateTest.remainingTime">Remaining Time</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidateTest.testStartDateTime">Test Start Date Time</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidateTest.testEndDateTime">Test End Date Time</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.candidateTest.candidate">Candidate</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {candidateTestList.map((candidateTest, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${candidateTest.id}`} color="link" size="sm">
                      {candidateTest.id}
                    </Button>
                  </td>
                  <td>
                    {candidateTest.testCompletionDate ? (
                      <TextFormat type="date" value={candidateTest.testCompletionDate} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{candidateTest.testScore}</td>
                  <td>
                    {candidateTest.testScheduledDate ? (
                      <TextFormat type="date" value={candidateTest.testScheduledDate} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{candidateTest.questionsAttempted}</td>
                  <td>{candidateTest.remainingTime}</td>
                  <td>
                    {candidateTest.testStartDateTime ? (
                      <TextFormat type="date" value={candidateTest.testStartDateTime} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {candidateTest.testEndDateTime ? (
                      <TextFormat type="date" value={candidateTest.testEndDateTime} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {candidateTest.candidate ? (
                      <Link to={`candidate/${candidateTest.candidate.id}`}>{candidateTest.candidate.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${candidateTest.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${candidateTest.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${candidateTest.id}/delete`}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
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
              <Translate contentKey="assessmentApp.candidateTest.home.notFound">No Candidate Tests found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ candidateTest }: IRootState) => ({
  candidateTestList: candidateTest.entities,
  loading: candidateTest.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CandidateTest);
