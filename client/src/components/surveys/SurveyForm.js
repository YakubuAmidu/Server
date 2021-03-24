// SurveyForm shows a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email body', name: 'body' },
  { label: 'Recipient List', name: 'emails' },
];

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          label='Survey Title'
          type='text'
          name='title'
          component={SurveyField}
        />
        <Field
          label='Subject line'
          type='text'
          name='subject'
          component={SurveyField}
        />
        <Field
          label='Email body'
          type='text'
          name='body'
          component={SurveyField}
        />
        <Field
          label='Recipient List'
          type='text'
          name='emails'
          component={SurveyField}
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
