/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/scss/link.scss'

export const Link = ({ label, type, href, blank, inoui, fontSize, forVideo }) => {
    return (
        <a
            className={`link ${inoui ? 'inoui ' : ''}${forVideo ? 'video ' : ''}${type}`}
            href={!href ? '#' : type === 'phone' ? `tel:${href}` : href}
            target={blank ? "_blank" : ''}
            style={{ fontSize: `${fontSize}` }}
            rel="noreferrer"
        >
            {label}
        </a>
    )
}

Link.propTypes = {
    /**
    * Link contents
    */
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired,
    /**
    * wheater the link is internal or external 
    */
    type: PropTypes.oneOf(['internal', 'external', 'download', 'tel']).isRequired,
    /**
    * wheather the link is under a video or not 
    */
    forVideo: PropTypes.bool,
    /**
    * if theme is inoui or not
    */
    inoui: PropTypes.bool,
    /**
    * link 
    */
    href: PropTypes.string,
    /**
    * if link need to be open in a new tab or not 
    */
    blank: PropTypes.bool,
    /**
   * Click handler
   */
    onClick: PropTypes.func
};

Link.defaultProps = {
    label: '',
    type: 'internal',
    href: '',
    blank: false,
    inoui: false
};