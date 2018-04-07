import React, { Component } from 'react';
import { connect } from 'react-redux'

import classes from './Stats.css';
// import Timer from '../../components/Timer/Timer';

class Stats extends Component {


    render() {
        // let time = Math.round(this.state.time / 1000);
        return (
            <div className={classes.Stats}>
                <h1> Game Stats </h1>
                {/* <p> Timer: <Timer/></p> */}
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
        counter: state.board.counter,
        lives: state.board.lives,
        level: state.board.level
    }
}

export default connect(mapStateToProps)(Stats);