// removed th id primary key
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './section.reducer';
import { ISection } from 'app/shared/model/section.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISectionProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Section = (props: ISectionProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const handleSyncList = () => {
    props.getEntities();
  };

  const { sectionList, match, loading } = props;
  return (
    <div>
      <h2 id="section-heading" data-cy="SectionHeading">
        <Translate contentKey="assessmentApp.section.home.title">Sections</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="assessmentApp.section.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="assessmentApp.section.home.createLabel">Create new Section</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {sectionList && sectionList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="assessmentApp.section.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.section.sectionQuestion">Section Question</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.section.sectionNumberHeading">Section Number Heading</Translate>
                </th>
                <th>
                  <Translate contentKey="assessmentApp.section.sectionNumber">Section Number</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {sectionList.map((section, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${section.id}`} color="link" size="sm">
                      {section.id}
                    </Button>
                  </td>
                  <td>{section.sectionQuestion}</td>
                  <td>{section.sectionNumberHeading}</td>
                  <td>{section.sectionNumber}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${section.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${section.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${section.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
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
              <Translate contentKey="assessmentApp.section.home.notFound">No Sections found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ section }: IRootState) => ({
  sectionList: section.entities,
  loading: section.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Section);
