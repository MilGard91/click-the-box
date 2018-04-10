import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/TSL/Toolbar/Toolbar';
import Board from '../../containers/Board/Board';
import classes from './Layout.css';
import Stats from '../../containers/Stats/Stats'
import SideDrawer from '../../components/TSL/SideDrawer/SideDrawer';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer />
                <main className={classes.Layout}>
                    <Board />
                    <Stats />
                </main>
            </Aux>

        );
    }
};

export default Layout;