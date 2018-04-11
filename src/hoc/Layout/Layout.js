import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/TSL/Toolbar/Toolbar';
import Board from '../../containers/Board/Board';
import classes from './Layout.css';
import Stats from '../../containers/Stats/Stats'

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar />
                <main className={classes.Layout}>
                    <Board />
                    <Stats />
                </main>
            </Aux>

        );
    }
};

export default Layout;