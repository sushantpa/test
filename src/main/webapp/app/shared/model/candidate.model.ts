import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { ICandidateTest } from 'app/shared/model/candidate-test.model';

export interface ICandidate {
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  latestTestScore?: number | null;
  lastTestDate?: string | null;
  registrationDate?: string | null;
  registrationCount?: number | null;
  testTakenCount?: number | null;
  canTakeTest?: boolean | null;
  user?: IUser | null;
  candidateTests?: ICandidateTest[] | null;
}

export const defaultValue: Readonly<ICandidate> = {
  canTakeTest: false,
};
