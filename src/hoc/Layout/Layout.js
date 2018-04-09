import React, {Component} from 'react';


import Board from '../../containers/Board/Board';
import classes from './Layout.css';
import Stats from '../../containers/Stats/Stats'

class Layout extends Component {
    render () {
        return (
        <div className={classes.Layout}>
            <Board />
            <Stats />
        </div>
    );
    }
};

export default Layout;