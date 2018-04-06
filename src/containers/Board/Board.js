import React, { Component } from 'react';
import { connect } from 'react-redux';

import Boxes from '../../components/Boxes/Boxes';
import classes from './Board.css';
import * as actions from '../../store/actions/index';


class Board extends Component {
    state= {
        gameStarted: false
    }
    

    clickedOnTheBoxHandler(x, y) {
        console.log('Box position: ' + x + '-' + y);
        if (!this.props.gameStarted) {
            this.props.onGameStart(x, y);
            this.setState({gameStarted: true});
        } else {
            this.props.onBoxClicked(x, y);
            console.log(this.state);
        }
    }


    render() {

        return (
            <div className={classes.Board}>
                <Boxes
                active={this.props.activePosition}
                must={this.props.mustPosition}
                next={this.props.nextPosition}
                clicked={(x, y) => this.clickedOnTheBoxHandler(x,y)} />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        gameStarted: state.stats.gameStarted,
        nextPosition: state.board.nextPosition,
        activePosition: state.board.activePosition,
        mustPosition: state.board.mustPosition,

    }
}


const mapDispatchToProps = dispatch => {
    return {
        onBoxClicked: (positionX, positionY) => dispatch(actions.boxClicked(positionX, positionY)),
        onGameStart: (positionX, positionY) => dispatch(actions.gameStart(positionX, positionY))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Board);