import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from './store/actions/index';
import Layout from './hoc/Layout/Layout';
import classes from './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onStart(this.props.data);
  }
  render() {
    let layout = null;
    if (this.props.gameReady) {
      layout = <Layout />;
    }
    return (
      <div className={classes.App}>
        {layout}
      </div>
    );
  }
}
App.propTypes = {
  onStart: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
  gameReady: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  data: state.data,
  gameReady: state.gameReady,
});

const mapDispatchToProps = dispatch => ({
  onStart: data => dispatch(actions.checkGameData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
