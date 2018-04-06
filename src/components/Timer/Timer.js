import React, { Component } from 'react';
import {connect} from 'react-redux';


// import * as actions from '../../store/actions/index';

class Timer extends Component {

    componentDidMount() {
        this.interval = setInterval(this.forceUpdate.bind(this), 1000);
    }


    componentWillUnmount() {
        clearInterval(this.interval);
    }



    

    rednder() {

        const getElapsedTime = (startedAt, stoppedAt = new Date().getTime()) => {
            if (!startedAt) {
                return 0;
            } else {
                return stoppedAt - startedAt;
            }
        }

        const elapsed = getElapsedTime(this.props.startedAt, this.props.stoppedAt);

        return (
            <span style = {{color: 'green'}}>{elapsed}</span>
        )
    }
}

const mapStateToProps = state => {
    return {
        timerStarted: state.stats.timeStarted,
        timerStoped: state.stats.timerStoped
    };
};


export default connect(mapStateToProps)(Timer);