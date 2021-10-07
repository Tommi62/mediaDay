import React from 'react';
import Countdown from '@rumess/react-flip-countdown';
import {Row} from 'react-bootstrap';
import {useMediaQuery} from 'react-responsive';





const FlipCountdown = ({time}) => {
    const isMobile = useMediaQuery({query: `(max-width: 760px)`});

    return (
        (isMobile) ? (
            < Row className='countdownBg' >
                <h2 className="countdownMainText">The stream starts in:</h2>
                <Countdown
                    theme='dark'
                    hideYear
                    hideMonth
                    size='small'
                    endAt={time} // Date/Time
                />
            </Row >
        ) : (
            <Row className='countdownBg'>
                <h2 className="countdownMainText">The stream starts in:</h2>
                <Countdown
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