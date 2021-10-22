import React from 'react';
import { PropTypes } from 'prop-types';
import "../styles/index.css"

export const Button = (args) => {
    return (<>
        <button className={args.background + " p-2 " + (args.rounded ? 'rounded' : "")}>{args.label}</button>
    </>)
}

Button.prototype = {
    background:PropTypes.string,
    label: PropTypes.string,
    rounded:PropTypes.boolean
}