import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/TSL/Toolbar/Toolbar';
import Board from '../../containers/Board/Board';
import classes from './Layout.css';
import Stats from '../../containers/Stats/Stats';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index'

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar clicked={this.props.onShowTopScores} activated={this.props.showTopScores}/>
                <main className={classes.Layout}>
                    <Board />
                    <Stats />
                </main>
            </Aux>

        );
    }
};

const mapStateToProps = state => {
    return {
        showTopScores: state.showTopScores
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowTopScores: () => dispatch(actions.showTopScores())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Layout);