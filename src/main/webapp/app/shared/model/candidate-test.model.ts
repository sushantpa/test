import dayjs from 'dayjs';
import { ICandidateAnswer } from 'app/shared/model/candidate-answer.model';
import { ICandidate } from 'app/shared/model/candidate.model';

export interface ICandidateTest {
  id?: number;
  testCompletionDate?: string | null;
  testScore?: number | null;
  testScheduledDate?: string | null;
  questionsAttempted?: string | null;
  remainingTime?: string | null;
  testStartDateTime?: string | null;
  testEndDateTime?: string | null;
  candidateAnswers?: ICandidateAnswer[] | null;
  candidate?: ICandidate | null;
}

export const defaultValue: Readonly<ICandidateTest> = {};
