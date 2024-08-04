import { IQuestion } from 'app/shared/model/question.model';

export interface ISection {
  id?: number;
  sectionQuestion?: string | null;
  sectionNumberHeading?: string | null;
  sectionNumber?: number | null;
  questions?: IQuestion[] | null;
}

export const defaultValue: Readonly<ISection> = {};
