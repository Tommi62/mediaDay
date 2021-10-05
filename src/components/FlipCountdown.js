import React from 'react';
import Countdown from '@rumess/react-flip-countdown';

const FlipCountdown = ({time}) => {
    return (
        <Countdown
            hideYear
            hideMonth
            endAt={time} // Date/Time
        />
    );
}

export default FlipCountdown;