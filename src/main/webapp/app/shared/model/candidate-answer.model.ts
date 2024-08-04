import { IQuestion } from 'app/shared/model/question.model';
import { ICandidateTest } from 'app/shared/model/candidate-test.model';

export interface ICandidateAnswer {
  id?: number;
  answer?: string | null;
  question?: IQuestion | null;
  candidateTest?: ICandidateTest | null;
}

export const defaultValue: Readonly<ICandidateAnswer> = {};
