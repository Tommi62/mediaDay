import React from 'react';
import Countdown from '@rumess/react-flip-countdown';
import { Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';





const FlipCountdown = ({ time }) => {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    return (
        (isMobile) ? (
            < Row className='countdownBg' >
                <h2 className="countdownMainText">Streamin alkuun:</h2>
                <Countdown
                    dayTitle='Päivää'
                    hourTitle='Tuntia'
                    minuteTitle='Minuuttia'
                    secondTitle='Sekuntia'
                    theme='dark'
                    hideYear
                    hideMonth
                    size='small'
                    endAt={time} // Date/Time
                    className="cd"
                />
            </Row >
        ) : (
            <Row className='countdownBg'>
                <h2 className="countdownMainText">Streamin alkuun:</h2>
                <Countdown
                    dayTitle='Päivää'
                    hourTitle='Tuntia'
                    minuteTitle='Minuuttia'
                    secondTitle='Sekuntia'
                    theme='dark'
                    hideYear
                    hideMonth
                    size='medium'
                    endAt={time} // Date/Time
                />
            </Row>
        )
    );
}

export default FlipCountdown;
