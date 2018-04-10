import React, { Component } from 'react';
import { connect } from 'react-redux'

import classes from './Stats.css';
import * as actions from '../../store/actions/index';
import Timer from '../../components/Timer/Timer';
import Scores from '../../components/Scores/Scores';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';
import Players from '../../components/Players/Players';
import Levels from '../../components/Levels/Levels';
import Form from '../../components/UI/Form/Form'


class Stats extends Component {

    state = {
        inputValue: ''
    }


    componentWillUpdate(newProps, newState) {
        if (newProps.newData)
        this.props.onStoreGameData(newProps.data)
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
        event.target.reset();

    }

    inputChangeHandler = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    render() {

        let time = 0;
        time = (this.props.gameStarted && !this.props.gameFinished) ? <Timer /> : '0s';
        const modalInventory = this.props.pickPlayer ? (
            <div>
                <p>CHOOSE A PLAYER</p>
                <Players players={this.props.players} select={this.props.onSelectPlayer} />
                <Form
                    submit={this.submitHandler}
                    changed={this.inputChangeHandler} />
            </div>
        ) :
            this.props.pickLvl ? (
                <div>
                    <p>CHOOSE A LEVEL</p>
                    <Levels levels={this.props.user} lvlclicked={this.props.onSelectLvl} />
                </div>
            ) : null;
        return (
            <Aux>
                <Modal show={this.props.pickLvl || this.props.pickPlayer}>
                    {modalInventory}
                </Modal>
                <div className={classes.Stats}>
                    <div>
                        <h1> Game Stats </h1>
                        <p> Timer: {time}</p>
                        <p> Clicks left: <span style={{ color: 'red' }}>{this.props.counter} </span> </p>
                        <p> Lives: <span style={{ color: 'green' }}>{this.props.lives}</span> </p>
                        <p> Level: <span style={{ color: 'green' }}>{this.props.level}</span> </p>
                    </div>
                    <div>
                        <h1>Top Scores</h1>
                        <Scores list={this.props.user} />
                    </div>
                </div>
            </Aux>

        );
    }
};

const mapStateToProps = state => {
    return {
        newData: state.newData,
        data: state.data,
        gameStarted: state.gameStarted,
        gameFinished: state.gameFinished,
        counter: state.counter,
        lives: state.lives,
        level: state.level,
        time: state.time,
        players: state.data.users,
        user: state.user,
        pickPlayer: state.pickPlayer,
        pickLvl: state.pickLvl
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (newPlayer) => dispatch(actions.submitNewPlayer(newPlayer)),
        onSelectPlayer: (playerName) => dispatch(actions.selectPlayer(playerName)),
        onSelectLvl: (lvlNumber) => dispatch(actions.selectLevel(lvlNumber)),
        onStoreGameData: (data) => dispatch(actions.storeNewData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);