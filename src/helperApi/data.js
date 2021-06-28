import {API_URL, FIVE_MINUTES, ONE_HOUR, ONE_MINUTE, ONE_WEEK} from '../utils/constants';
import moment from "moment";

const mapTabsToParams = {
    [ONE_MINUTE]: { period: 1, precision: 'Minutes' },
    [FIVE_MINUTES]: { period: 5, precision: 'Minutes' },
    [ONE_HOUR]: { period: 1, precision: 'Hour' },
    [ONE_WEEK]: { period: 24 * 7, precision: 'Hours' }
};

const mapTabToFormat = {
    [ONE_MINUTE]: 'mm:ss',
    [FIVE_MINUTES]: 'mm:ss',
    [ONE_HOUR]: 'HH:mm',
    [ONE_WEEK]: 'MM:DD'
};

const getApiUrl = (period, precision) => {
    const urlParams = getUrlParams(period, precision);
    return `${API_URL}${urlParams}`;
};

const getUrlParams = (period, precision) => {
    return `?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${period}&Precision=${precision}&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
};

const getFormatter = (tab) => {
    const currentFormat = mapTabToFormat[tab];
    return (date) => moment(date).format(currentFormat);
};

export {getApiUrl, getUrlParams, getFormatter, mapTabsToParams};