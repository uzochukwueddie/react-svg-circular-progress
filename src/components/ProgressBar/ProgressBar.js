import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './ProgressBar.css';

const ProgressBar = props => {
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke,
    } = props;

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);

        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out';

    }, [setOffset, progress, circumference, offset]);

    return (
        <div>
            <svg
                className="circular-chart"
                width={size}   
                height={size} 
            >
                <circle
                    className="circular-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                ></circle>
                <circle
                    className="circle"
                    ref={circleRef}
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                ></circle>
                <text
                    x={center}
                    y={center}
                    className="percentage"
                >
                    {progress}%
                </text>
            </svg>
        </div>
    );
}

ProgressBar.propTypes = {
    size: PropTypes.number,
    progress: PropTypes.number,
    strokeWidth: PropTypes.number,
    circleOneStroke: PropTypes.string,
    circleTwoStroke: PropTypes.string
}

export default ProgressBar;