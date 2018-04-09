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
import Button from '../../components/UI/Button/Button';
import Form from '../../components/UI/Form/Form'

class Stats extends Component {

    state = {
        inputValue: ''
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue)
    }

    inputChangeHandler = (event) => {
        this.setState({inputValue: event.target.value});
    }

    render() {
        let time = 0;
        // if (this.props.gameStarted) {
        //     time = <Timer />
        // }
        const modalInventory = this.props.pickPlayer ? (
            <div>
                <p>CHOOSE A PLAYER</p>
                <Players players={this.props.players} />
                <Form 
                submit ={this.submitHandler}
                changed={this.inputChangeHandler}/>
            </div>
                ):
                    this.props.pickLvl ?   (
                <div>
                    <p>CHOOSE A LEVEL</p>
                    <Levels levels={this.props.user} />
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
                    gameStarted: state.board.gameStarted,
                gameFinished: state.board.gameStarted,
                counter: state.board.counter,
                lives: state.board.lives,
                level: state.board.level,
                time: state.stats.time,
                players: state.stats.data.users,
                user: state.stats.data.marko,
                pickPlayer: state.stats.pickPlayer,
                pickLvl: state.stats.pickLvl
            }
        }
        
const mapDispatchToProps = dispatch => {
    return {
                    onTimer: (gameStarted, gameFinished) => dispatch(actions.timer(gameStarted, gameFinished)),
                    onSubmit: (newPlayer) => dispatch (actions.submitNewPlayer(newPlayer))
            }
        }
        
export default connect(mapStateToProps, mapDispatchToProps)(Stats);