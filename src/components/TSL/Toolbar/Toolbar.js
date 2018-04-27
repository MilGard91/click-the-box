import React from 'react';
import PropTypes from 'prop-types';

import classes from './Toolbar.css';
// import Logo from '../Logo/Logo';
import ModalButtons from '../ModalButtons/ModalButtons';

const toolbar = props => (
  <header className={classes.Toolbar}>
    {/* <Logo /> */}
    <ModalButtons clicked={props.clicked} activated={props.activated} />
  </header>
);

toolbar.propTypes = {
  clicked: PropTypes.func.isRequired,
  activated: PropTypes.bool.isRequired,
};

export default toolbar;
