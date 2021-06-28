import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import {ONE_MINUTE, FIVE_MINUTES, ONE_HOUR, ONE_WEEK} from '../../utils/constants';
import useStyles from './styles';

const tabs = {
    [ONE_MINUTE]: ONE_MINUTE,
    [FIVE_MINUTES]: FIVE_MINUTES,
    [ONE_HOUR]: ONE_HOUR,
    [ONE_WEEK]: ONE_WEEK
};

const TabsComponent = (props) => {
    const classes = useStyles();
    const {tabChangeHandler, selected, loading} = props;

    const onHandleTabChange = (event, tab) => {
        tabChangeHandler(tab);
    };

    return (
        <div className={classes.tabsWrapper}>
            {!loading && (
                <Tabs
                    value={selected}
                    TabIndicatorProps={{style: {backgroundColor: '#2451b7'}}}
                    onChange={onHandleTabChange}
                >
                    <Tab label="1M" value={tabs[ONE_MINUTE]}/>
                    <Tab label="5M" value={tabs[FIVE_MINUTES]}/>
                    <Tab label="1H" value={tabs[ONE_HOUR]}/>
                    <Tab label="1W" value={tabs[ONE_WEEK]}/>
                </Tabs>
            )}
        </div>
    );
};

export default TabsComponent;