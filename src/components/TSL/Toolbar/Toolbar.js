import React from 'react';

import classes from './Toolbar.css'
import Logo from '../Logo/Logo';
import ModalButtons from '../ModalButtons/ModalButtons';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo />
        <ModalButtons />
    </header>
)

export default toolbar;