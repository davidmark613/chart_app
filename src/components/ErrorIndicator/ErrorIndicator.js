import React from "react";
import './ErrorIndicator.module.css';
import image from '../../assets/error-icon.png';
import Card from "../../UI/Card/Card";

import classes from './ErrorIndicator.module.css';

const ErrorIndicator = () => {
    return (
        <Card className={classes['error-indicator']}>
            <img src={image} alt="error-icon"/>
            <span className={classes.boom}>BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already fix it)
            </span>
        </Card>
    );
};

export default ErrorIndicator;