import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  render() {
    return <div>SurveyList</div>;
  }
}

function mapStateToProps() {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
