import { ICandidateAnswer } from 'app/shared/model/candidate-answer.model';
import { ISection } from 'app/shared/model/section.model';

export interface IQuestion {
  id?: number;
  question?: string | null;
  questionNumber?: string | null;
  a?: string | null;
  b?: string | null;
  c?: string | null;
  d?: string | null;
  e?: string | null;
  answer?: string | null;
  candidateAnswer?: ICandidateAnswer | null;
  section?: ISection | null;
}

export const defaultValue: Readonly<IQuestion> = {};
