import React from 'react';
import { Field, reduxForm } from 'redux-form';

interface Props {
  question: any;
}

const QuestionOption = (props: Props) => {
  const { question } = props;
  return (
    <form>
      <label id="A" className="question-radio-item">
        <Field name={`${question.id}`} component="input" type="radio" value="a" /> A) {question.a}
      </label>
      <label id="B" className="question-radio-item">
        <Field name={`${question.id}`} component="input" type="radio" value="b" /> B) {question.b}
      </label>
      <label id="C" className="question-radio-item">
        <Field name={`${question.id}`} component="input" type="radio" value="c" /> C) {question.c}
      </label>
      <label id="D" className="question-radio-item">
        <Field name={`${question.id}`} component="input" type="radio" value="d" /> D) {question.d}
      </label>
      <label id="E" className="question-radio-item">
        <Field name={`${question.id}`} component="input" type="radio" value="e" /> E) {question.e}
      </label>
    </form>
  );
};

export default reduxForm({
  form: 'options',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(QuestionOption);
