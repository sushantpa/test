import './viewcandidatedetails.scss';

import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { createEntity, reset, getEntity, activate, deactivate } from '../../entities/candidate/candidate.reducer';
import dayjs from 'dayjs';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { closePage } from '../../entities/page/page.reducer';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Theme } from '@material-ui/core';

type props = {
  candidateId: any;
};

const useStyles = makeStyles((theme: Theme) => ({
  dialog: {
    width: '420px',
    height: '120px',
    background: '#FFFFFF',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    font: 'Montserrat',
    color: '#001D58',
  },
  dialogActive: {
    width: '520px',
    height: '160px',
    background: '#FFFFFF',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    font: 'Montserrat',
    color: '#001D58',
  },
  dialogHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FF5252',
    height: '50px',
    font: 'Montserrat',
    fontSize: '16px',
  },
  dialogHeaderActive: {
    color: '#329632',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    font: 'Montserrat',
    fontSize: '16px',
  },
  dialogBottom: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '70px',
  },
  deactivateButton: {
    backgroundColor: '#FF5252',
    color: '#fff',
    font: 'Montserrat',
  },
  deactivateButtonActive: {
    backgroundColor: '#329632',
    color: '#fff',
    font: 'Montserrat',
  },
  dialogText: {
    font: 'Montserrat',
    color: '#001D58',
    fontWeight: 400,
    fontSize: '16px',
  },
  dialogTextActive: {
    font: 'Montserrat',
    color: '#001D58',
    fontWeight: 400,
    fontSize: '16px',
    textAlign: 'center',
    //  display: "flex",
    //  justifyContent: "center",
    //  alignItems: "center"
  },
}));

export interface IAddCandidateProps extends props, StateProps, DispatchProps {}
export const ViewCandidateDetails = (props: IAddCandidateProps) => {
  const { candidateEntity, updateSuccess, message, candidateId } = props;
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line no-console
  console.log(candidateEntity);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  useEffect(() => {
    props.getEntity(candidateId);
  }, [candidateId]);

  const handleDeactivate = () => {
    props.deactivate(candidateEntity.id);
    setOpen(false);
  };

  const handleActivate = () => {
    props.activate(candidateEntity.id);
    setOpen(false);
  };

  const handleClose = () => {
    props.closePage();
  };

  const classes = useStyles();

  const detailsList = [
    [1, 'Email address', candidateEntity.email],
    [2, 'Date registered', dayjs(candidateEntity.registrationDate).format('YYYY-MM-DD')],
    [3, 'Test date', candidateEntity.lastTestDate ? dayjs(candidateEntity.lastTestDate).format('YYYY-MM-DD') : 'NOT TAKEN'],
    [4, 'Test score', candidateEntity.latestTestScore],
    [5, 'No. of times registered', candidateEntity.registrationCount],
    [6, 'No. of tests taken', candidateEntity.testTakenCount],
    [7, 'Password', candidateEntity?.user?.password],
  ];

  const RowItem = item => {
    const [id, content, value] = item;

    return (
      <ul className="details-flex-item" key={id}>
        <li>{content}</li>
        <li>{value}</li>
      </ul>
    );
  };

  return (
    candidateEntity && (
      <>
        {candidateEntity.canTakeTest ? (
          <Dialog open={open} onClose={handleCloseDialog} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title" className={classes.dialogHeader}>
              DEACTIVATE USER
            </DialogTitle>
            <DialogContent className={classes.dialog}>
              <DialogContentText id="alert-dialog-description" className={classes.dialogText}>
                You are about to deactivate this user instance.
              </DialogContentText>
              {/* <DialogContentText id="alert-dialog-description" className={classes.dialogText}>
           This action is not reversible
            </DialogContentText> */}
              <DialogContentText id="alert-dialog-description" className={classes.dialogText}>
                Do you want to proceed?
              </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.dialogBottom}>
              <Button onClick={handleCloseDialog} variant="outlined" color="secondary">
                Cancel
              </Button>
              <Button onClick={handleDeactivate} className={classes.deactivateButton}>
                Deactivate User
              </Button>
            </DialogActions>
          </Dialog>
        ) : (
          <Dialog open={open} onClose={handleCloseDialog} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title" className={classes.dialogHeaderActive}>
              ACTIVATE USER
            </DialogTitle>
            <DialogContent className={classes.dialogActive}>
              <DialogContentText id="alert-dialog-description" className={classes.dialogText}>
                You are about to reactivate this user instance.
              </DialogContentText>
              <DialogContentText id="alert-dialog-description" className={classes.dialogTextActive}>
                This user will be able to take the test within the next 5 days.
              </DialogContentText>
              <DialogContentText id="alert-dialog-description" className={classes.dialogText}>
                Do you want to proceed?
              </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.dialogBottom}>
              <Button onClick={handleCloseDialog} variant="outlined" color="secondary">
                Cancel
              </Button>
              <Button onClick={handleActivate} className={classes.deactivateButtonActive}>
                Activate User
              </Button>
            </DialogActions>
          </Dialog>
        )}
        <div>
          <div className="candidate-detail-app-body">
            {updateSuccess && <div>{message}</div>}
            <div className="back-button-container">
              <button onClick={handleClose} className="back-button">
                <ArrowBackIcon />
                Back
              </button>
            </div>
            <div className="viewcandidate-body">
              <div className="details-flex">
                <h1>{`${candidateEntity.firstName} ${candidateEntity.lastName}`} </h1>{' '}
                <div className="active-item-flex">
                  {' '}
                  <li style={{ color: candidateEntity.canTakeTest ? '#059E1E' : 'red' }}>
                    {candidateEntity.canTakeTest ? 'ACTIVE' : 'DEACTIVATED'}{' '}
                  </li>{' '}
                  <img src="../../../content/images/more-vertical.svg" alt="" />
                </div>
              </div>
              <div className="row-body">{detailsList.map(item => RowItem(item))}</div>
              <div className="view-candidate-form">
                <button className="btn_details btn-create btn_details_dark">EXPORT RESULT TO ZOHO RECRUIT</button>
                {candidateEntity.canTakeTest === false && (
                  <button className="btn_details btn-create btn_details_activate" onClick={handleClickOpen}>
                    ACTIVATE USER INSTANCE
                  </button>
                )}
                {candidateEntity.canTakeTest && (
                  <button className="btn_details btn-create btn_details_light" onClick={handleClickOpen}>
                    DEACTIVATE USER INSTANCE
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

const mapStateToProps = ({ authentication, candidate }) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  candidateEntity: candidate.entity,
  updateSuccess: candidate.updateSuccess,
  message: candidate.message,
});

const mapDispatchToProps = {
  createEntity,
  getEntity,
  activate,
  deactivate,
  reset,
  closePage,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ViewCandidateDetails);
