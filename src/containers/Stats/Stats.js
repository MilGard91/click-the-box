import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import classes from './Stats.css';
import * as actions from '../../store/actions/index';
import Timer from '../../components/Timer/Timer';
import Scores from '../../components/Scores/Scores';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import Players from '../../components/Players/Players';
import Levels from '../../components/Levels/Levels';
import Form from '../../components/UI/Form/Form';
import Button from '../../components/UI/Button/Button';
import Chart from '../../components/Scores/Chart/Chart';

class Stats extends Component {
    state = {
      inputValue: '',
      modalCase: 'PLAYER',
    }

    componentWillUpdate(newProps) {
      if (newProps.newData) {
        this.props.onStoreGameData(newProps.data);
      }
      if (newProps.pickLvl !== this.props.pickLvl ||
        newProps.pickPlayer !== this.props.pickPlayer ||
        newProps.wrongUsername !== this.props.wrongUsername ||
        newProps.showTopScores !== this.props.showTopScores ||
        newProps.showCharts !== this.props.showCharts) {
        this.modalCaseDetermination(newProps.pickPlayer, newProps.pickLvl, newProps.wrongUsername, newProps.showTopScores, newProps.showCharts);
      }
    }


    modalCaseDetermination = (player, level, wrongUsername, topScores, chart) => {
      if (player) {
        this.setState({ modalCase: 'PLAYER' });
      }
      if (level) {
        this.setState({ modalCase: 'LEVEL' });
      }
      if (wrongUsername) {
        this.setState({ modalCase: 'WRONG USERNAME' });
      }
      if (topScores) {
        this.setState({ modalCase: 'TOP SCORES' });
      }
      if (chart) {
        this.setState({ modalCase: 'CHART' });
      }
    }
    userCheck = (users, user) => {
      let check;
      let res;
      if (user === '') {
        res = 'PLEASE ENTER USERNAME';
        return res;
      }
      if (users.length === 0) {
        res = 'PASS';
        return res;
      }
      check = user.replace(/\./g, '\\.');
      check = `\\b${check}\\b`;
      check = new RegExp(check, 'i');
      res = 'PASS';
      for (let i = 0; i < users.length; i++) {
        if (users[i].match(check)) {
          res = 'USERNAME ALREADY EXISTS';
          break;
        }
      }
      return res;
    }

    submitHandler = (event) => {
      event.preventDefault();
      const check = (this.userCheck(this.props.players, this.state.inputValue));
      if (check === 'PASS') {
        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
      } else {
        this.setState({ userMessage: check });
        this.props.onInvalidUsername();
        this.setState({ inputValue: '' });
      }
    }

    inputChangeHandler = (event) => {
      this.setState({ inputValue: event.target.value });
    }

    render() {
      let time = 0;
      time = (this.props.gameStarted && !this.props.gameFinished) ? <Timer /> : '0s';
      let modalInventory = '';
      switch (this.state.modalCase) {
        case 'PLAYER':
          modalInventory = (
            <div className={classes.Modal}>
              <p>CHOOSE A PLAYER</p>
              <Players players={this.props.players} select={this.props.onSelectPlayer} delete={this.props.onDeletePlayer} />
              <Form
                submit={this.submitHandler}
                changed={this.inputChangeHandler}
                clicked={this.submitHandler}
                value={this.state.inputValue}
              />
            </div>
          );
          break;
        case 'LEVEL':
          modalInventory = (
            <div className={classes.Modal}>
              <p>CHOOSE A LEVEL</p>
              <Levels levels={this.props.userlvls} lvlclicked={this.props.onSelectLvl} />
            </div>
          );
          break;
        case 'WRONG USERNAME':
          modalInventory = (
            <div>
              <p>{this.state.userMessage}</p>
              <Button btnType="Win" clicked={this.props.onRetryUsername}>RETRY</Button>
            </div>
          );
          break;
        case 'TOP SCORES':
          modalInventory = (
            <div style={{ height: '100%' }}>
              <h2>TOP SCORES</h2>
              <Scores list={this.props.scores} clicked={this.props.onShowCharts} />
            </div>
          );
          break;
        case 'CHART':
          modalInventory = (
            <div style={{ height: '100%' }}>
              <h2>LEVEL {this.props.chartLevel.length}</h2>
              <Chart times={this.props.chartLevel} clicked={this.props.onHideChart} />
            </div>
          );
          break;
        default:
          modalInventory = <div />;
      }
      return (
        <Aux>
          <Modal show={this.props.pickLvl || this.props.pickPlayer || this.props.wrongUsername || this.props.showTopScores || this.props.showCharts}>
            {modalInventory}
          </Modal>

          <div className={classes.Stats}>
            <h4> Game Stats </h4>
            <div> Timer: {time}</div>
            <div> Clicks left: <span style={{ color: 'red' }}>{this.props.counter} </span> </div>
            <div> Lives: <span style={{ color: 'green' }}>{this.props.lives}</span> </div>
            <div> Level: <span style={{ color: 'green' }}>{this.props.level}</span> </div>
          </div>
        </Aux>

      );
    }
}

Stats.propTypes = {
  onStoreGameData: PropTypes.func.isRequired,
  onDeletePlayer: PropTypes.func.isRequired,
  onHideChart: PropTypes.func.isRequired,
  onInvalidUsername: PropTypes.func.isRequired,
  onRetryUsername: PropTypes.func.isRequired,
  onSelectLvl: PropTypes.func.isRequired,
  onSelectPlayer: PropTypes.func.isRequired,
  onShowCharts: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
  gameFinished: PropTypes.bool.isRequired,
  gameStarted: PropTypes.bool.isRequired,
  pickLvl: PropTypes.bool.isRequired,
  pickPlayer: PropTypes.bool.isRequired,
  wrongUsername: PropTypes.bool.isRequired,
  showTopScores: PropTypes.bool.isRequired,
  showCharts: PropTypes.bool.isRequired,
  counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  lives: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  userlvls: PropTypes.number.isRequired,
  chartLevel: PropTypes.arrayOf(PropTypes.number).isRequired,
  scores: PropTypes.arrayOf(PropTypes.array).isRequired,
};

const mapStateToProps = state => ({
  newData: state.newData,
  data: state.data,
  gameStarted: state.gameStarted,
  gameFinished: state.gameFinished,
  counter: state.counter,
  lives: state.lives,
  level: state.level,
  time: state.time,
  players: state.data.users,
  scores: state.scores,
  pickPlayer: state.pickPlayer,
  pickLvl: state.pickLvl,
  wrongUsername: state.wrongUsername,
  showTopScores: state.showTopScores,
  userlvls: state.userlevels,
  chartLevel: state.chartLevel,
  showCharts: state.showCharts,
});

const mapDispatchToProps = dispatch => (
  {
    onSubmit: newPlayer => dispatch(actions.submitNewPlayer(newPlayer)),
    onSelectPlayer: (playerName, playerIndex) => dispatch(actions.selectPlayer(playerName, playerIndex)),
    onDeletePlayer: (playerName, index) => dispatch(actions.deletePlayer(playerName, index)),
    onSelectLvl: lvlNumber => dispatch(actions.selectLevel(lvlNumber)),
    onStoreGameData: data => dispatch(actions.storeNewData(data)),
    onInvalidUsername: () => dispatch(actions.invalidUsername()),
    onRetryUsername: () => dispatch(actions.retryUsername()),
    onShowCharts: chartLevel => dispatch(actions.showCharts(chartLevel)),
    onHideChart: () => dispatch(actions.hideChart()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
