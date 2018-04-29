import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Toolbar from '../../components/TSL/Toolbar/Toolbar';
import Board from '../../containers/Board/Board';
import classes from './Layout.css';
import Stats from '../../containers/Stats/Stats';
import * as actions from '../../store/actions/index';

class Layout extends Component {
  showTopScores = () => {
    this.props.onShowTopScores();
  }
  render() {
    return (
      <div className={classes.Container}>
        <Toolbar clicked={this.showTopScores} activated={this.props.showTopScores} />
        <main className={classes.Layout}>
          <Board />
          <Stats />
        </main>
      </div>

    );
  }
}

Layout.propTypes = {
  onShowTopScores: PropTypes.func.isRequired,
  showTopScores: PropTypes.bool.isRequired,
};

const mapStateToProps = state => (
  {
    showTopScores: state.showTopScores,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onShowTopScores: () => dispatch(actions.showTopScores()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
