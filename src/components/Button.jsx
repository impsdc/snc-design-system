import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ type, label, icon }) => {
    return (
        <button
            className={`
            btn
            default
            ${type}
            ${icon ? 'icon-btn' : ''}
            `}>
            {icon && <span className={`icon ${icon}`}></span>}
            {label}
        </button>
    )
}

Button.propTypes = {
    /**
    * Define the color of the btn
    */
    type: PropTypes.oneOf(['inoui', 'dark', 'edito']),
    /**
   * Link contents
   */
    label: PropTypes.string.isRequired,
    /**
     * Classname of the icon font 
     */
    icon: PropTypes.string,
    /**
    * Click handler
    */
    onClick: PropTypes.func
};

Button.defaultProps = {
    type: 'default',
    onClick: undefined,
};