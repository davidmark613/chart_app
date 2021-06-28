import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './styles';

const Spinner = (props) => {
    const classes = useStyles();
    const {loading} = props;

    return (
        <div>
            {loading && (
                <div className={classes.root}>
                    <CircularProgress/>
                </div>
            )}
        </div>
    );
};

export default Spinner;