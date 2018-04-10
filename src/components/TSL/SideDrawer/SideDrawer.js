import React from 'react';

import Logo from '../Logo/Logo';
import classes from './SideDrawer.css';
import ModalButtons from '../ModalButtons/ModalButtons';

const sideDrawer = (props) => {
    //...
    return (
        <div className={classes.SideDrawer}>
            <Logo height="20%"/>
            <ModalButtons />
        </div>
    );
};


export default sideDrawer;