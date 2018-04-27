import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Modal from '../../components/UI/Modal/Modal';
import Boxes from '../../components/Boxes/Boxes';
import classes from './Board.css';
import * as actions from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';
// import Players from '../../components/Players/Players';


class Board extends Component {
  state ={}

  render() {
    const finishMessage = this.props.finishType === 'Win' ? (
      <div className={classes.Modal}>
        <div>
          <p>{this.props.finishMessage}{this.props.level - 1}</p>
          <Button btnType="Lost" clicked={this.props.onSwitchPlayer}>CHANGE PLAYER</Button>
          <Button btnType="Lost" clicked={this.props.onSwitchLvl}>SELECT A LEVEL</Button>
          <Button btnType="Win" clicked={this.props.onNextLvl}>CONTINUE</Button>
        </div>
      </div>

    ) : this.props.finishType === 'Lost' ? (
      <div className={classes.Modal}>
        <div>
          <p>{this.props.finishMessage}</p>
          <Button btnType="Lost" clicked={this.props.onSwitchPlayer}>CHANGE PLAYER</Button>
          <Button btnType="Lost" clicked={this.props.onSwitchLvl}>SELECT A LEVEL</Button>
          <Button btnType="Win" clicked={this.props.onNextLvl}>REPLAY</Button>
        </div>
      </div>

    ) : this.props.finishType === 'AllLost' ? (
      <div className={classes.Modal}>
        <div>
          <p>{this.props.finishMessage}</p>
          <Button btnType="Lost" clicked={this.props.onSwitchPlayer}>CHANGE PLAYER</Button>
          <Button btnType="Win" clicked={this.props.onNextLvl}>START OVER</Button>
        </div>
      </div>

    ) : <div />;

    return (
      <div className={classes.Board}>
        <Modal show={this.props.gameFinished}>
          {finishMessage}
        </Modal>
        <Boxes
          active={this.props.activePosition}
          must={this.props.mustPosition}
          next={this.props.nextPosition}
          flaged={this.props.flaged}
          clicked={(x, y) => this.props.onBoxClicked(this.props.gameStarted, x, y)}
        />
      </div>
    );
  }
}

Board.propTypes = {
  finishType: PropTypes.string.isRequired,
  finishMessage: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  onSwitchPlayer: PropTypes.func.isRequired,
  onSwitchLvl: PropTypes.func.isRequired,
  onNextLvl: PropTypes.func.isRequired,
  gameFinished: PropTypes.bool.isRequired,
  activePosition: PropTypes.arrayOf(PropTypes.array).isRequired,
  mustPosition: PropTypes.arrayOf(PropTypes.array).isRequired,
  nextPosition: PropTypes.arrayOf(PropTypes.array).isRequired,
  flaged: PropTypes.arrayOf(PropTypes.array).isRequired,
  onBoxClicked: PropTypes.func.isRequired,
  gameStarted: PropTypes.bool.isRequired,
};

const mapStateToProps = state => (
  {
    gameStarted: state.gameStarted,
    nextPosition: state.nextPosition,
    activePosition: state.activePosition,
    mustPosition: state.mustPosition,
    gameFinished: state.gameFinished,
    finishMessage: state.finishMessage,
    flaged: state.flaged,
    finishType: state.finishType,
    level: state.level,
    players: state.data.users,
  });


const mapDispatchToProps = dispatch => (
  {
    onBoxClicked: (gameStarted, positionX, positionY) => dispatch(actions.boxClicked(gameStarted, positionX, positionY)),
    onNextLvl: () => dispatch(actions.nextLvl()),
    onSwitchPlayer: () => dispatch(actions.switchPlayer()),
    onSwitchLvl: () => dispatch(actions.switchLvl()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Board);
