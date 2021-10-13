import React, { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Speaker from '../components/Speaker';
import texts from '../data/texts.json';
import TextCarousel from './../components/TextCarousel';
import FlipCountdown from './../components/FlipCountdown';
import moment from 'moment';
import mediaData from '../data/MediaData.json';
import Video from '../components/Video';
import Logos from '../components/Logos';

const Home = () => {
    const [ide, setIde] = useState(0);
    const [videoStream, setVideoStream] = useState();
    const [closestTime, setClosestTime] = useState('');
    const [mediaType, setMediaType] = useState('');
    const [show, setShow] = useState(false);
    const [isStreamLive, setIsStreamLive] = useState(true);
    const [isItStreamTime, setIsItStreamTime] = useState(false);
    const [streamOver, setStreamOver] = useState(false);
    const [isCountdownOver, setIsCountdownOver] = useState(false);
    const [startInterval, setStartInterval] = useState(false);

    useEffect(() => {
        try {
            const eventResult = mediaData.media.find(({ id }) =>
                id === ide
            );

            if (!eventResult) {
                return (<div>Media {ide} was not found :(</div>)
            }
            setVideoStream(eventResult);
            const type = eventResult.type;
            setMediaType(type);
        } catch (e) {
            console.log(e.message);
        }
    }, [ide]);

    useEffect(() => {
        try {
            const times = mediaData.media.map((data) => {
                return data.startTime;
            });

            const now = moment().format("YYYY-MM-DD HH:mm:ss");

            const streamStartTime = mediaData.media[0].startTime;
            const compareStartTime = moment(streamStartTime, "YYYY-MM-DD HH:mm:ss").diff(now, "seconds");

            const streamEndTime = mediaData.media[0].endTime;
            const compareEndTime = moment(streamEndTime, "YYYY-MM-DD HH:mm:ss").diff(now, "seconds");

            const safeMargin = mediaData.media[0].safetyMarginMinutes * 60;
            const endTimeWithSafeMargin = compareEndTime + safeMargin;

            if (compareStartTime <= 0 && endTimeWithSafeMargin >= 0) {
                if (compareEndTime <= 0 && !isStreamLive) {
                    setIsItStreamTime(false);
                    setStreamOver(true);
                    setIde(1);
                } else {
                    setIsItStreamTime(true);
                }
            } else if (compareStartTime > 0) {
                setStartInterval(true);
                setIsItStreamTime(false);
                const closest = times.reduce((prev, curr) => {
                    const currentCompare = moment(curr, "YYYY-MM-DD HH:mm:ss").diff(now, "minutes");
                    const previousCompare = moment(prev, "YYYY-MM-DD HH:mm:ss").diff(now, "minutes");
                    if (currentCompare < previousCompare && currentCompare >= 0) {
                        return curr;
                    } else return prev;
                });
                setClosestTime(closest);
            } else {
                setIsItStreamTime(false);
                setStreamOver(true);
                setIde(1);
            }
        } catch (e) {
            console.log(e.message);
        }
    }, [isStreamLive, isCountdownOver]);

    useEffect(() => {
        try {
            if (startInterval) {
                const interval = setInterval(() => {
                    const now = moment().format("YYYY-MM-DD HH:mm:ss");
                    const streamStartTime = mediaData.media[0].startTime;
                    const compareStartTime = moment(streamStartTime, "YYYY-MM-DD HH:mm:ss").diff(now, "seconds");
                    if (compareStartTime <= 0) {
                        setIsCountdownOver(true);
                        clearInterval(interval);
                    }
                }, 1000);
                return () => clearInterval(interval);
            }
        } catch (e) {
            console.log(e.message);
        }
    }, [startInterval]);

    return (
        <div>
            <Container fluid>
                <Row>
                    <div className="section fbg"></div>
                    <h1 className='logo'>Media Day</h1>
                </Row>
                <Row className='homeBody card3'>
                    <Col lg={12} xl={7} xxl={6}>
                        <Container fluid className='carouselContainer'>
                            {isItStreamTime ? (
                                <Row>
                                    {isStreamLive ? (
                                        <Col>
                                            {show ? (
                                                <Col>
                                                    {mediaType !== '' &&
                                                        <Row className='videoHomepage'>
                                                            {!!videoStream &&
                                                                <Video
                                                                    url={videoStream.url}
                                                                    type={videoStream.streamVideoType}
                                                                    mediaType={mediaType}
                                                                    setIde={setIde}
                                                                    setShow={setShow}
                                                                    setIsStreamLive={setIsStreamLive}
                                                                    isItStreamTime={isItStreamTime}
                                                                    page={'Home'}
                                                                />
                                                            }
                                                        </Row>
                                                    }
                                                </Col>
                                            ) : (
                                                <Col style={{ display: 'none' }}>
                                                    {mediaType !== '' &&
                                                        <Row className='videoHomepage'>
                                                            {videoStream !== {} &&
                                                                <Video
                                                                    url={videoStream.url}
                                                                    type={videoStream.streamVideoType}
                                                                    mediaType={mediaType}
                                                                    setIde={setIde}
                                                                    setShow={setShow}
                                                                    setIsStreamLive={setIsStreamLive}
                                                                    isItStreamTime={isItStreamTime}
                                                                    page={'Home'}
                                                                />
                                                            }
                                                        </Row>
                                                    }
                                                </Col>
                                            )
                                            }
                                        </Col>
                                    ) : (
                                        <Col className="countdownContainer">
                                            <Col className="countdownBg">
                                                <h4 className="streamStartsSoon">Striimi alkaa pian</h4>
                                            </Col>
                                        </Col>
                                    )}
                                </Row>
                            ) : (
                                <Row>
                                    {streamOver ? (
                                        <Col >
                                            {mediaType !== '' &&
                                                <Row className='videoHomepage'>
                                                    {!!videoStream &&
                                                        <Video
                                                            url={videoStream.url}
                                                            type={videoStream.streamVideoType}
                                                            mediaType={mediaType}
                                                            setIde={setIde}
                                                            setShow={setShow}
                                                            setIsStreamLive={setIsStreamLive}
                                                            isItStreamTime={isItStreamTime}
                                                            page={'Home'}
                                                        />
                                                    }
                                                </Row>
                                            }
                                        </Col>
                                    ) : (
                                        <Col className="countdownContainer">
                                            <FlipCountdown time={closestTime} />
                                        </Col>
                                    )}
                                </Row>
                            )}
                            <Row>
                                <TextCarousel className='carousel' textArray={texts}></TextCarousel>
                            </Row>
                            <Row className='logoRow'>
                                <Logos />
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={12} xl={5} xxl={6}>
                        <Container fluid>
                            {/* <h1>Puhujat</h1> */}
                            {texts.speakers.map((speaker) => {
                                return <Speaker speaker={speaker} />
                            })}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Home;