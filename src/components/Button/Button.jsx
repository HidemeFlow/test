import React from 'react';
import './Button.css';
import GenerateClass from '../../GenerateClass';

const Button = (props) => {
    return (
        <button {...props} className={'button '+props.className+' '+GenerateClass } tabindex="0" type="button"><span>{props.children}</span></button>
    );
};

export default Button;
