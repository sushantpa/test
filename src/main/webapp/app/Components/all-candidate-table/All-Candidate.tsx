import React, { useEffect, useState } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import PaginatedTable from '../../Components/paginated-table/table';
import dayjs from 'dayjs';
import {
  resetDownload,
  getEntities,
  getResultEntities,
  getEntity,
  downloadAllCandidate,
  downloadSummaryCandidate,
} from '../../entities/candidate/candidate.reducer';
import { connect } from 'react-redux';
import ViewCandidateDetails from 'app/modules/viewcandidatedetails/viewcandidatedetails';
import SearchIcon from '@material-ui/icons/Search';
import { openPage } from '../../entities/page/page.reducer';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { exportToCSV } from '../../shared/util/export-to-csv';

type prop = {
  match: any;
};

const useStyles = makeStyles((theme: Theme) => ({
  dialog: {
    width: '620px',
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
  dialogSummary: {
    width: '620px',
    height: '200px',
    background: '#FFFFFF',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    font: 'Montserrat',
    color: '#001D58',
  },
  dialogHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#003296',
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
    height: '120px',
  },
  exportButton: {
    backgroundColor: '#003296',
    color: '#fff',
    font: 'Montserrat',
    width: '120px',
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
  },
  DateField: {
    width: '50%',
    font: 'Montserrat',
    fontSize: '16px',
  },
  labelColor: {
    color: '#003296',
    font: 'Montserrat',
    fontSize: '16px',
  },
  cssOutlinedInput: {
    borderColor: '#003296 !important',
  },
}));

export interface IAllCandidateProp extends prop, StateProps, DispatchProps {}

const AllCandidate = (props: IAllCandidateProp) => {
  const {
    candidateList: [candidates, count],
    pageStatus,
    candidateId,
    candidateDownload,
    candidatesSummaryDownloads,
  } = props;
  const [searchUser, setSearchUser] = useState('');
  const [openExportAll, setOpenExportAll] = React.useState(false);
  const [openExportSummary, setOpenExportSummary] = React.useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const classes = useStyles();

  const handleSearch = e => {
    e.preventDefault();
    setSearchUser(e.target.value);
  };

  const handleViewCandidate = e => {
    props.openPage(e.target.dataset.id);
  };

  const handleExportAllClickOpen = () => {
    setOpenExportAll(true);
  };

  const handleCloseExportAllDialog = () => {
    setOpenExportAll(false);
  };

  const handleExportAll = () => {
    props.downloadAllCandidate();
    setOpenExportAll(false);
  };

  const handleExportSummaryClickOpen = () => {
    setOpenExportSummary(true);
  };

  const handleCloseExportSummaryDialog = () => {
    setOpenExportSummary(false);
  };

  const handleExportSummary = () => {
    props.downloadSummaryCandidate(startDate, endDate);
    setOpenExportSummary(false);
  };

  useEffect(() => {
    if (candidateDownload !== null) {
      exportToCSV(candidateDownload, `Candidates-${dayjs(Date.now()).format('YYYY-MM-DD')}`);
      props.resetDownload();
    }
    if (candidatesSummaryDownloads !== null) {
      exportToCSV(candidatesSummaryDownloads, `CandidatesSummary-${dayjs(Date.now()).format('YYYY-MM-DD')}`);
      props.resetDownload();
    }
  }, [candidateDownload, candidatesSummaryDownloads]);

  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'STATUS',
      accessor: 'status',
    },
    {
      Header: 'DATE REGISTERED',
      accessor: 'dateRegistered',
    },
    {
      Header: 'TEST DATE',
      accessor: 'testDate',
    },
    {
      Header: 'CANDIDATE INFO',
      accessor: 'candidateInfo',
    },
  ];
  let data;
  if (candidates?.length > 0) {
    data = candidates.map(item => {
      return {
        name: `${item.firstName} ${item.lastName}`,
        status: item.canTakeTest ? 'ACTIVE' : 'INACTIVE',
        dateRegistered: dayjs(item.registrationDate).format('YYYY-MM-DD'),
        testDate: item.lastTestDate === null ? 'NOT TAKEN' : dayjs(item.lastTestDate).format('YYYY-MM-DD'),
        candidateInfo: (
          <button className="button-link" data-id={item.id} onClick={handleViewCandidate}>
            View Details
          </button>
        ),
      };
    });
  } else {
    data = candidates;
  }

  return pageStatus && candidateId ? (
    <ViewCandidateDetails candidateId={candidateId} />
  ) : (
    <>
      <Dialog
        open={openExportAll}
        onClose={handleCloseExportAllDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.dialogHeader}>
          EXPORT ALL
        </DialogTitle>
        <DialogContent className={classes.dialog}>
          <DialogContentText id="alert-dialog-description" className={classes.dialogText}>
            Are you sure you want to download all candidates records?
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dialogBottom}>
          <Button onClick={handleCloseExportAllDialog} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleExportAll} className={classes.exportButton}>
            EXPORT ALL
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openExportSummary}
        onClose={handleCloseExportSummaryDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.dialogHeader}>
          EXPORT SUMMARY
        </DialogTitle>
        <DialogContent className={classes.dialogSummary}>
          <TextField
            id="date"
            label="Start Date"
            type="date"
            className={classes.DateField}
            variant="outlined"
            color="secondary"
            InputLabelProps={{
              shrink: true,
              className: classes.labelColor,
            }}
            InputProps={{
              className: classes.labelColor,
              classes: {
                notchedOutline: classes.cssOutlinedInput,
              },
            }}
            onChange={e => setStartDate(e.target.value)}
          />
          <TextField
            id="date"
            label="End Date"
            type="date"
            className={classes.DateField}
            variant="outlined"
            color="secondary"
            InputLabelProps={{
              shrink: true,
              className: classes.labelColor,
            }}
            InputProps={{
              className: classes.labelColor,
              classes: {
                notchedOutline: classes.cssOutlinedInput,
              },
            }}
            onChange={e => setEndDate(e.target.value)}
          />
        </DialogContent>
        <DialogActions className={classes.dialogBottom}>
          <Button onClick={handleCloseExportSummaryDialog} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleExportSummary} className={classes.exportButton}>
            EXPORT
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component="div" className="admin-app-body-content">
        <div className="app-body-content-top">
          <div style={{ width: '40vw', fontWeight: 500, color: '#001D58' }}>Recent Candidates</div>
          <div className="app-body-content-top-right">
            <button className="link-style button-link" onClick={handleExportAllClickOpen}>
              Export All
            </button>
            <button className="link-style button-link" onClick={handleExportSummaryClickOpen}>
              Export Summary
            </button>
            <fieldset className="search__input fieldset" style={{ width: '20vw' }}>
              <input type="text" name="search-user" id="search-user" value={searchUser} placeholder="Search" onChange={handleSearch} />
              <SearchIcon color="secondary" />
            </fieldset>
          </div>
        </div>
        <PaginatedTable data={data} columns={columns} count={count} searchUser={searchUser} />
      </TableContainer>
    </>
  );
};
const mapStateToProps = ({ authentication, candidate, candidateDetail }) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  candidateList: candidate.entities,
  loading: candidate.loading,
  pageStatus: candidateDetail.status,
  candidateId: candidateDetail.candidateId,
  candidateDownload: candidate.candidatesDownloads,
  candidatesSummaryDownloads: candidate.candidatesSummaryDownloads,
});

const mapDispatchToProps = {
  getEntities,
  getResultEntities,
  getEntity,
  openPage,
  downloadAllCandidate,
  downloadSummaryCandidate,
  resetDownload,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AllCandidate);
