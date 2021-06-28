import React from 'react';
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
} from 'recharts';

import CustomTooltip from '../CustomTooltip/CustomTooltip';

const Chart = (props) => {
    const {data} = props;

    return (
        <ResponsiveContainer width='100%' height={400}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='0%' stopColor='#2451b7' stopOpacity={0.4}/>
                        <stop offset='75%' stopColor='#2451b7' stopOpacity={0.05}/>
                    </linearGradient>
                </defs>
                <Area dataKey='value' stroke='#2451b7' fill='url(#color)'/>
                <XAxis
                    dataKey='date'
                    interval='preserveStart'
                    padding={{right: 20}}
                    minTickGap={50}

                />
                <YAxis
                    dataKey='value'
                    orientation='right'
                    type='number'
                    domain={['dataMin', 'dataMax']}
                    interval='preserveStar'
                    tickFormatter={(number) => number.toFixed(3)}
                />
                <Tooltip content={<CustomTooltip />}/>
                <CartesianGrid opacity={0.1} vertical={false}/>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default Chart;