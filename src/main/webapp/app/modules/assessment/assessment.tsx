import './assessment.scss';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { getCandidateQuestion } from '../../entities/question-type/question-type.reducer';
import { IRootState } from 'app/shared/reducers';
import { getRemainingTime, submitAssessment } from '../../entities/candidate-test/candidate-test.reducer';
import { getLoginCandidate } from 'app/entities/candidate/candidate.reducer';
import Timer from 'app/Components/timer';
import QuestionOption from '../../shared/question-option/question-option';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export interface IAssessmentProp extends StateProps, DispatchProps {}

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
export const Assessment = (props: any) => {
  const {
    remainingTime,
    assessmentStarted,
    assessmentCompleted,
    candidateLatestTest,
    answers,
    assessmentSubmitted,
    assessmentStatus,
  } = props;
  const [openSubmitDialog, setOpenSubmitDialog] = React.useState(false);
  const classes = useStyles();
  // eslint-disable-next-line no-console

  useEffect(() => {
    props.getLoginCandidate();
    if (assessmentStarted === false && assessmentCompleted === false) {
      return history.push('/');
    }

    if (assessmentStatus === false && assessmentStarted === true && assessmentCompleted === true && assessmentSubmitted === true) {
      return history.push('/logout');
    }
  }, [assessmentStatus, assessmentStarted, assessmentCompleted, assessmentSubmitted]);

  useEffect(() => {
    if (candidateLatestTest) {
      props.getRemainingTime(candidateLatestTest.id);
    }
  }, [remainingTime]);

  useEffect(() => {
    if (candidateLatestTest) {
      props.getCandidateQuestion(candidateLatestTest.id);
    }
  }, []);

  useEffect(() => {
    if (remainingTime && remainingTime <= 0) {
      return history.push('/logout');
    }
  }, []);

  const history = useHistory();
  const { sectionList, candidateLoading, questionLoading } = props;
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    let nextIndex = currentQuestionIndex < sectionList[currentSectionIndex].questions.length - 1 ? currentQuestionIndex + 1 : 0;
    if (currentQuestionIndex >= sectionList[currentSectionIndex].questions.length - 1 && nextIndex === 0) {
      const nextSectionIndex = currentSectionIndex < sectionList.length - 1 ? currentSectionIndex + 1 : currentSectionIndex;
      if (nextSectionIndex > sectionList.length - 1 && nextIndex > sectionList[currentSectionIndex].questions.length - 1) {
        nextIndex = currentQuestionIndex;
      }
      setCurrentSectionIndex(nextSectionIndex);
      setCurrentQuestionIndex(nextIndex);
      return;
    }
    setCurrentQuestionIndex(nextIndex);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex === 0 && currentSectionIndex === 0) {
      setCurrentQuestionIndex(0);
      setCurrentSectionIndex(0);
      return;
    }
    if (currentQuestionIndex === 0) {
      const nextSectionIndex = currentSectionIndex - 1;
      setCurrentSectionIndex(nextSectionIndex);
      const nextQuestionIndex = sectionList[nextSectionIndex].questions.length - 1;
      setCurrentQuestionIndex(nextQuestionIndex);
      return;
    }
    const previousIndex = currentQuestionIndex > 0 ? currentQuestionIndex - 1 : currentQuestionIndex;
    setCurrentQuestionIndex(previousIndex);
  };

  async function handleSubmitAssessment() {
    let candidateTestId;
    let candidateAnswers;
    if (candidateLatestTest) {
      candidateTestId = candidateLatestTest.id;
    }
    const answerList = [];
    if (answers && answers.values) {
      candidateAnswers = answers.values;
      Object.entries(candidateAnswers).forEach(([key, value]) => {
        answerList.push({ candidateTestId, questionId: key, answer: value });
      });
    }
    await props.submitAssessment(answerList, candidateLatestTest.id);
    return history.push('/submit');
  }

  const handleSubmitAssessmentFinal = () => {
    handleSubmitAssessment();
    setOpenSubmitDialog(false);
  };

  const handleCloseDialog = () => {
    setOpenSubmitDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenSubmitDialog(true);
  };

  return (
    candidateLatestTest &&
    sectionList.length > 0 && (
      <>
        <Dialog
          open={openSubmitDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" className={classes.dialogHeader}>
            Submit Assessment
          </DialogTitle>
          <DialogContent className={classes.dialog}>
            <DialogContentText id="alert-dialog-description" className={classes.dialogText}>
              Are you sure you want to submit your assessment?
            </DialogContentText>
            <DialogContentText id="alert-dialog-description" className={classes.dialogText}>
              This action is not reversible
            </DialogContentText>
          </DialogContent>
          <DialogActions className={classes.dialogBottom}>
            <Button onClick={handleCloseDialog} variant="outlined" color="secondary">
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSubmitAssessmentFinal} className={classes.exportButton}>
              SUBMIT
            </Button>
          </DialogActions>
        </Dialog>
        <div>
          <div className="header">
            <img alt="" src="../../../content/images/appLogo.png" className="logo" />
            <div className="header-text">Assessment Questions</div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '30vw' }}>
              <Timer remainingTime={remainingTime} submit={handleSubmitAssessment} />
              <button className="header-button" onClick={handleOpenDialog}>
                Submit
              </button>
            </div>
          </div>
          <Row style={{ width: '100%' }}>
            <Col md="12" className="assessment-app-content">
              <div className="question-instruction">
                DIRECTIONS: Each group of questions in this section is based on a set of conditions. In answering some of the questions, it
                may be useful to draw a rough diagram. Choose the response that most accurately and completely answers the question and
                blacken the corresponding space on your answer sheet.
              </div>
              <div className="question-card">
                <div className="question-heading">{sectionList[currentSectionIndex].sectionNumberHeading}</div>
                <div>
                  <div className="paragraph">{sectionList[currentSectionIndex].sectionQuestion}</div>
                  <div className="question">{`${sectionList[currentSectionIndex].questions[currentQuestionIndex].questionNumber}. ${sectionList[currentSectionIndex].questions[currentQuestionIndex].question}`}</div>
                  <QuestionOption question={sectionList[currentSectionIndex].questions[currentQuestionIndex]} />
                </div>
                <div className="question-navigation">
                  <div style={{ display: currentQuestionIndex === 0 && currentSectionIndex === 0 ? 'none' : 'flex' }}>
                    <button className="previous-button" onClick={handlePreviousQuestion}>
                      {' '}
                      PREVIOUS{' '}
                    </button>
                  </div>
                  <div
                    style={{
                      display:
                        currentSectionIndex === sectionList.length - 1 &&
                        currentQuestionIndex === sectionList[currentSectionIndex].questions.length - 1
                          ? 'none'
                          : 'flex',
                    }}
                  >
                    <button className="next-button" onClick={handleNextQuestion}>
                      NEXT
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </>
    )
  );
};

const mapStateToProps = ({ questionType, candidateTest, candidate, form }: IRootState) => ({
  sectionList: questionType.entity,
  questionLoading: questionType.loading,
  remainingTime: candidateTest.remainingTime,
  timeLoading: candidateTest.loading,
  candidateLatestTest: candidate.candidateLatestTest,
  candidateLoading: candidate.loading,
  assessmentStarted: candidate.assessmentStarted,
  assessmentCompleted: candidate.assessmentCompleted,
  answers: form.options,
  assessmentSubmitted: candidateTest.updateSuccess,
  assessmentStatus: candidate.assessmentStatus,
});

const mapDispatchToProps = {
  getCandidateQuestion,
  getRemainingTime,
  getLoginCandidate,
  submitAssessment,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);
