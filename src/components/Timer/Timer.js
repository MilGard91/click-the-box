
import React, { Component } from 'react';
import {connect} from 'react-redux';


import * as actions from '../../store/actions/index';

class Timer extends Component {

    
    componentDidMount() {
        this.interval= setInterval(() => this.props.onTimerTick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {

        return <span>{this.props.time}s</span>;
    }
}

const mapStateToProps = state => {
    return {
        time: state.stats.time,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTimerTick: () => dispatch(actions.timerTick()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Timer);
