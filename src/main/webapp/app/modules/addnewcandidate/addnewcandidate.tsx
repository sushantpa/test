import './addnewcandidate.scss';

import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import { useHistory, NavLink } from 'react-router-dom';
import { createEntity, reset } from '../../entities/candidate/candidate.reducer';

export interface IAddCandidateProps extends StateProps, DispatchProps {}
export const AddNewCandidate = (props: IAddCandidateProps) => {
  const [firstName, setName] = useState('');
  const [lastName, setEmail] = useState('');
  const [email, setPassword] = useState('');

  const history = useHistory();

  const handleRegisterCandidate = values => {
    if ((values.firstName, values.lastName, values.email)) {
      props.createEntity(values);
      return history.push('/admin');
    }
  };
  return (
    <div>
      <div className="addcandidate-body">
        <h1>Add new candidate</h1>
        <form className="search-filter">
          <div className="input-top">
            <fieldset className="search__input fieldset-name">
              <legend className="legend">first Name</legend>
              <input type="text" name="add-name" id="add-name" value={firstName} onChange={e => setName(e.target.value)} />
            </fieldset>
            <fieldset className="search__input fieldset-email">
              <legend className="legend">last Name</legend>
              <input type="text" name="add-name" id="add-name" value={lastName} onChange={e => setEmail(e.target.value)} />
            </fieldset>
          </div>
          <fieldset className="search__input fieldset-password">
            <legend className="legend">email</legend>
            <input type="email" name="add-name" id="add-name" value={email} onChange={e => setPassword(e.target.value)} />
          </fieldset>
          {/* <div className="autogenerate-password">
            <h3>Autogenerate Password</h3>
          </div> */}
          <button
            type="submit"
            className="btn btn-create btn_type_dark"
            onClick={() => handleRegisterCandidate({ firstName, lastName, email })}
          >
            SAVE
          </button>
          <button
            type="submit"
            className="btn btn-create btn_type_light"
            onClick={() => handleRegisterCandidate({ firstName, lastName, email })}
          >
            SAVE AND EMAIL CREDENTIALS
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
  candidateEntity: storeState.candidate.entity,
});

const mapDispatchToProps = {
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCandidate);
