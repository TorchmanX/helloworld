import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from '../../../components/core/Loading';

const mapStateToProps = (state) => {
  return {
    loading: state.game.loading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
