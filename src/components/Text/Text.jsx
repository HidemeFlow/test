import React from 'react';
import './Text.css';

const Text = (props) => {
    return (
        <span {...props} className={'text ' + props.className}></span>
    );
};

export default Text;
