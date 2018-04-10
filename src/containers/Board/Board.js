import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import Boxes from '../../components/Boxes/Boxes';
import classes from './Board.css';
import * as actions from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';
// import Players from '../../components/Players/Players';


class Board extends Component {
    state = {
        gameStarted: false
    }


    render() {
        let finishMessage = this.props.finishType === 'Win' ? (
            <div>
                <p>{this.props.finishMessage}{this.props.level-1}</p>
                <Button btnType={"Lost"}>QUIT</Button>
                <Button btnType={"Win"} clicked={this.props.onNextLvl}>CONTINUE</Button>
            </div>
        ): this.props.finishType === 'Lost' ? (
            <div>
                <p>{this.props.finishMessage}</p>
                <Button btnType={"Lost"}>QUIT</Button>
                <Button btnType={"Win"} clicked={this.props.onNextLvl}>CONTINUE</Button>
            </div>
        ): null;

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
                    clicked={(x, y) => this.props.onBoxClicked(this.props.gameStarted, x, y)} />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        gameStarted: state.gameStarted,
        nextPosition: state.nextPosition,
        activePosition: state.activePosition,
        mustPosition: state.mustPosition,
        gameFinished: state.gameFinished,
        finishMessage: state.finishMessage,
        flaged: state.flaged,
        finishType: state.finishType,
        level: state.level,
        players: state.data.users
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onBoxClicked: (gameStarted, positionX, positionY) => dispatch(actions.boxClicked(gameStarted, positionX, positionY)),
        onNextLvl: () => dispatch(actions.nextLvl())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);