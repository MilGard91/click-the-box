import React from 'react';

import classes from './Form.css';
import Button from '../Button/Button';

const Form = (props) => (
    <form className={classes.Form} onSubmit={props.submit}>
        <input
        className={classes.Input} 
        placeholder={'USERNAME'}
        onChange={props.changed} /> 
        <Button btnType={"Win"} clicked={props.clicked}>CREATE PLAYER</Button>
    </form>
);

export default Form;