import { ISection } from 'app/shared/model/section.model';

export interface IQuestionType {
  id?: number;
  typeKey?: string | null;
  sections?: ISection[] | null;
}

export const defaultValue: Readonly<IQuestionType> = {};
