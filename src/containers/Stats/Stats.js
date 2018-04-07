import React, { Component } from 'react';
import { connect } from 'react-redux'

import classes from './Stats.css';
import * as actions from '../../store/actions/index';

class Stats extends Component {



    render() {
        
        return (
            <div className={classes.Stats}>
                <h1> Game Stats </h1>
                <p> Timer: {this.props.time}</p>
                <p> Clicks left: <span style={{ color: 'red' }}>{this.props.counter} </span> </p>
                <p> Lives: <span style={{ color: 'green' }}>{this.props.lives}</span> </p>
                <p> Level: <span style={{ color: 'green' }}>{this.props.level}</span> </p>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        gameStarted: state.board.gameStarted,
        gameFinished: state.board.gameStarted,
        counter: state.board.counter,
        lives: state.board.lives,
        level: state.board.level,
        time: state.stats.time
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTimer: (gameStarted, gameFinished)=> dispatch(actions.timer(gameStarted, gameFinished))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Stats);