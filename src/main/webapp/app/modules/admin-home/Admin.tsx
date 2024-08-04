import './admin-home.scss';
import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { getEntities, getResultEntities } from '../../entities/candidate/candidate.reducer';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import AddNewCandidate from '../addnewcandidate/addnewcandidate';
import AllCandidate from '../../Components/all-candidate-table/All-Candidate';
import AllCandidateResult from '../../Components/all-candidate-table/Candidate-result';
import { connect } from 'react-redux';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  className: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, className, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={className}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  AppBar: {
    backgroundColor: '#003296',
    width: '100vw',
    height: '15vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  tabs: {
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: 500,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: 'normal',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginRight: '5px',
    marginLeft: '5px',
    color: 'white',
  },
  button: {
    color: '#FF5252',
    width: '126px',
    height: '43px',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: 500,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  tabPanel: {
    height: '100%',
  },
}));

export interface IAdminHomeProp extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}
export const AdminHome = (props: IAdminHomeProp) => {
  const { match } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history = useHistory();
  const handleChange = (event: React.ChangeEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    return history.push('/logout');
  };

  const backToCandidate = () => {
    setValue(0);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Box>
          <img alt="" src="../../../content/images/appLogo.png" className="logo" />
        </Box>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary">
          <Tab label="VIEW CANDIDATE" {...a11yProps(0)} className={classes.tabs} />
          <Tab label="ADD NEW CANDIDATES" {...a11yProps(1)} className={classes.tabs} />
          <Tab label="VIEW RESULTS" {...a11yProps(2)} className={classes.tabs} />
        </Tabs>
        <Button variant="contained" className={classes.button} onClick={handleLogout}>
          LOGOUT
        </Button>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <AllCandidate match={match} />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        <AddNewCandidate />
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
        <AllCandidateResult match={match} />
      </TabPanel>
    </div>
  );
};
const mapStateToProps = ({ authentication, candidate, table }) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
  candidateList: candidate.entities,
  loading: candidate.loading,
  table,
});

const mapDispatchToProps = {
  getEntities,
  getResultEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);
