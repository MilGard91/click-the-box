import React, { Component } from 'react';
import { connect } from 'react-redux'

import classes from './Stats.css';
import Timer from '../../components/Timer/Timer';

class Stats extends Component {
    state = {
        // timer: null,
        time: 0,
        lives: 1
    }

    render() {
        // let time = Math.round(this.state.time / 1000);
        return (
            <div className={classes.Stats}>
                <h1> Game Stats </h1>
                {/* <p> Timer: <Timer/></p> */}
                <p> Clicked: <span style={{ color: 'red' }}>{this.props.counter} </span> </p>
                <p> Lives: <span style={{ color: 'green' }}>{this.state.lives}</span> </p>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        gameStarted: state.stats.gameStarted,
        counter: state.stats.counter,
    }
}

export default connect(mapStateToProps)(Stats);