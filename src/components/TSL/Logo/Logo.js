import React from 'react';

import boxLogo from '../../../assets/Images/click-the-box-logo.png';
import classes from './Logo.css';

const logo = (
  <div className={classes.Logo}>
    <img src={boxLogo} alt="ClickTheBox" />
  </div>
);

export default logo;
