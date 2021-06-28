import React from 'react';
import classes from './CustomTooltip.module.css';

const CustomTooltip = ({active, payload, label}) => {

    if (active) {
        return (
            <div className={classes.tooltip}>
                <h4>{label}</h4>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;