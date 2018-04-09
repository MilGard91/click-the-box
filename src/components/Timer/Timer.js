import React, { Component } from 'react';
import {connect} from 'react-redux';


import * as actions from '../../store/actions/index';

class Timer extends Component {

    
    componentDidMount() {
        this.props.onTimeStarts();
    }

    componentWillUnmount() {
        this.props.onTimeStops();
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
        onTimeStarts: () => dispatch(actions.timer()),
        onTimeStops: () =>dispatch(actions.timerStoped())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Timer);

