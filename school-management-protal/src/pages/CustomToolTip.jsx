
import React from 'react';
import './CustomTooltip.css';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
                <p className="percentage">{`Percentage: ${((payload[0].value / payload[0].payload.total_classes) * 100).toFixed(2)}%`}</p>
            </div>
        );
    }
    return null; 
};

export default CustomTooltip;
