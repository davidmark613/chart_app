import React, {useState, useEffect, useCallback} from 'react';
import {ONE_HOUR} from './utils/constants';
import Chart from "./components/Chart/Chart";
import TabsComponent from './components/TabsComponent/TabsComponent';
import Spinner from './components/Spinner/Spinner';
import Card from './UI/Card/Card';
import {getApiUrl, getFormatter, mapTabsToParams} from './helperApi/data';
import ErrorIndicator from "./components/ErrorIndicator/ErrorIndicator";

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [value, setValue] = useState(ONE_HOUR);

    const tabChangeHandler = (selectedTab) => {
        setValue(selectedTab);
    };

    const fetchData = useCallback(async () => {
        const {period, precision} = mapTabsToParams[value];
        const currentUrl = getApiUrl(period, precision);
        const formatter = getFormatter(value);
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(currentUrl);
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            const loadedData = data.map((item) => {
                return {
                    date: formatter(item.Date),
                    value: item.Close
                }
            });
            setData(loadedData);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    },[value]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <Card>
            {!error && <Spinner loading={isLoading}/>}
            {!error && (
                <TabsComponent
                    tabChangeHandler={tabChangeHandler}
                    selected={value}
                    loading={isLoading}
                />
            )}
            {!isLoading && !error && <Chart data={data}/>}
            {error && <ErrorIndicator/>}
        </Card>
    );
}

export default App;
