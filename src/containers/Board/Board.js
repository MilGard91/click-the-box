import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Modal from '../../components/UI/Modal/Modal';
import Boxes from '../../components/Boxes/Boxes';
import classes from './Board.css';
import * as actions from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';

class Board extends Component {
  boxClicked = (x, y) => {
    this.props.onBoxClicked(this.props.gameStarted, x, y);
  }
  render() {
    let finishMessage = '';
    switch (this.props.finishType) {
      case 'Win':
        finishMessage = (
          <div className={classes.Modal}>
            <p>{this.props.finishMessage}{this.props.level - 1}</p>
            <Button btnType="Lost" clicked={this.props.onSwitchPlayer}>CHANGE PLAYER</Button>
            <Button btnType="Lost" clicked={this.props.onSwitchLvl}>SELECT A LEVEL</Button>
            <Button btnType="Win" clicked={this.props.onNextLvl}>CONTINUE</Button>
          </div>
        );
        break;
      case 'Lost':
        finishMessage = (
          <div className={classes.Modal}>

            <p>{this.props.finishMessage}</p>
            <Button btnType="Lost" clicked={this.props.onSwitchPlayer}>CHANGE PLAYER</Button>
            <Button btnType="Lost" clicked={this.props.onSwitchLvl}>SELECT A LEVEL</Button>
            <Button btnType="Win" clicked={this.props.onNextLvl}>REPLAY</Button>

          </div>
        );
        break;
      case 'AllLost':
        finishMessage = (
          <div className={classes.Modal}>

            <p>{this.props.finishMessage}</p>
            <Button btnType="Lost" clicked={this.props.onSwitchPlayer}>CHANGE PLAYER</Button>
            <Button btnType="Win" clicked={this.props.onNextLvl}>START OVER</Button>

          </div>
        );
        break;
      default: finishMessage = <div />;
    }

    return (
      <div className={classes.Board}>
        <Modal show={this.props.gameFinished}>
          {finishMessage}
        </Modal>
        <Boxes
          active={this.props.activePosition}
          must={this.props.mustPosition}
          next={this.props.nextPosition}
          clicked={(x, y) => this.boxClicked(x, y)}
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
