import '../css/VideoPage.css'

import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import moment from 'moment';
import Video from '../components/Video';
import VideoButton from '../components/VideoButton';

import mediaData from '../data/MediaData.json';
import eventData from '../data/events.json';

const VideoPage = () => {
    const [ide, setIde] = useState(0);
    const [videoArray, setVideoArray] = useState([]);
    const [videoStream, setVideoStream] = useState({});
    const [eventInfo, setEventInfo] = useState({});
    const [mediaType, setMediaType] = useState('');
    const [show, setShow] = useState(false);
    const [isStreamLive, setIsStreamLive] = useState(false);
    const [isItStreamTime, setIsItStreamTime] = useState(false);
    const [streamStatus, setStreamStatus] = useState('');
    const [dateTimeObject, setDateTimeObject] = useState({
        date: '',
        time: '',
    });

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
            console.log(mediaType);
        } catch (e) {
            console.log(e.message);
        }
    }, [ide]);


    useEffect(() => {
        try {
            let videoArr = [];
            for (let i = 0; i < mediaData.media.length; i++) {
                if (mediaData.media[i].type !== 'stream' || isStreamLive) {
                    videoArr.push(mediaData.media[i]);
                }
            }
            setVideoArray(videoArr);
            console.log('videoarr', videoArr);
        } catch (e) {
            console.log(e.message);
        }
    }, [isStreamLive]);

    useEffect(() => {
        try {
            const now = moment().format("YYYY-MM-DD HH:mm:ss");
            const streamStartTime = mediaData.media[0].startTime;
            const formatDate = moment(streamStartTime).format("D.M.YYYY");
            const formatTime = moment(streamStartTime).format("H.mm");
            const timeDateObject = {
                date: formatDate,
                time: formatTime,
            }
            setDateTimeObject(timeDateObject);
            const compareStartTime = moment(streamStartTime, "YYYY-MM-DD HH:mm:ss").diff(now, "seconds");

            const streamEndTime = mediaData.media[0].endTime;
            const compareEndTime = moment(streamEndTime, "YYYY-MM-DD HH:mm:ss").diff(now, "seconds");
            const safeMargin = mediaData.media[0].safetyMarginMinutes * 60;
            console.log('SAFE', safeMargin);
            const endTimeWithSafeMargin = compareEndTime + safeMargin;
            console.log('END', endTimeWithSafeMargin);

            if (compareStartTime <= 0 && endTimeWithSafeMargin >= 0) {
                if (compareEndTime <= 0) {
                    setStreamStatus('overTime')
                } else {
                    setStreamStatus('showTime');
                }
                setIsItStreamTime(true);
            } else if (compareStartTime > 0) {
                setIsItStreamTime(false);
                setStreamStatus('inFuture');
            } else {
                setIsItStreamTime(false);
                setStreamStatus('over');
            }
        } catch (e) {
            console.log(e.message);
        }
    }, []);

    useEffect(() => {
        try {
            if (isItStreamTime) {
                const interval = setInterval(() => {
                    console.log('Interval');
                    if (!isItStreamTime) {
                        clearInterval(interval);
                    }
                    const now = moment().format("YYYY-MM-DD HH:mm:ss");
                    let infoFound = false;
                    for (let i = 0; i < eventData.events.length; i++) {
                        const eventStartTime = eventData.events[i].startDate + ' ' + eventData.events[i].startTime;
                        const eventEndTime = eventData.events[i].startDate + ' ' + eventData.events[i].endTime;

                        const compareStartTime = moment(eventStartTime, "DD.MM.YYYY HH:mm").diff(now, "seconds");
                        const compareEndTime = moment(eventEndTime, "DD.MM.YYYY HH:mm").diff(now, "seconds");
                        if (compareStartTime <= 0 && compareEndTime >= 0) {
                            setEventInfo(eventData.events[i]);
                            infoFound = true;
                            break;
                        }
                    }
                    if (!infoFound) {
                        setEventInfo(eventData.placeholder[0]);
                    }
                }, 1000);
                return () => clearInterval(interval);
            }
        } catch (e) {
            console.log(e.message);
        }
    }, [isItStreamTime]);

    return (
        <Container fluid>
            <Row>
                <div className="section fbg"></div>
            </Row>
            <div className='pageBody card3'>
                <Container >
                    <Row>
                        <Col>
                            {streamStatus === '' && ''}
                            {streamStatus === 'inFuture' &&
                                <h2 className="display-5 videoPageTitle">Striimi starttaa tällä sivulla {dateTimeObject.date} klo. {dateTimeObject.time}</h2>
                            }
                            {streamStatus === 'showTime' &&
                                <div>
                                    {isStreamLive ? (
                                        <h2 className="display-5 videoPageTitle">Striimi on käynnissä</h2>
                                    ) : (
                                        <h2 className="display-5 videoPageTitle">Striimi alkaa pian</h2>
                                    )
                                    }
                                </div>
                            }
                            {streamStatus === 'overTime' &&
                                <div>
                                    {isStreamLive ? (
                                        <h2 className="display-5 videoPageTitle">Striimi on käynnissä</h2>
                                    ) : (
                                        <h2 className="display-5 videoPageTitle">Striimi on päättynyt</h2>
                                    )
                                    }
                                </div>
                            }
                            {streamStatus === 'over' &&
                                <h2 className="display-5 videoPageTitle">Tapahtumaan liittyvät videot</h2>
                            }
                        </Col>
                    </Row>
                    {videoStream !== {} &&
                        <Row>
                            {show ? (
                                <Col lg={9} className="videoPlayerCol" >
                                    <Row className="videoPlayerRow">
                                        {mediaType !== '' &&
                                            <Video
                                                url={videoStream.url}
                                                type={videoStream.streamVideoType}
                                                mediaType={mediaType}
                                                setIde={setIde}
                                                setShow={setShow}
                                                setIsStreamLive={setIsStreamLive}
                                                isItStreamTime={isItStreamTime}
                                                page={'VideoPage'}
                                            />
                                        }
                                    </Row>
                                    {mediaType === 'stream' &&
                                        <Row className="videoInfo">
                                            <Row>
                                                {eventInfo !== {} &&
                                                    <Col className="d-flex justify-content-start" style={{ padding: 0 }}>
                                                        <h4 className="videoTitle">{eventInfo.title}</h4>
                                                    </Col>
                                                }
                                            </Row>
                                            <Row>
                                                {eventInfo !== {} &&
                                                    <div className="d-flex justify-content-start description" style={{ padding: 0 }}>
                                                        {eventInfo.speakerDiscription}
                                                    </div>
                                                }
                                            </Row>
                                        </Row>
                                    }
                                    {mediaType === 'video' &&
                                        <Row className="videoInfo">
                                            <Row>
                                                <Col className="d-flex justify-content-start" style={{ padding: 0 }}>
                                                    <h4 className="videoTitle">{videoStream.name}</h4>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <div className="d-flex justify-content-start description" style={{ padding: 0 }}>
                                                    {videoStream.description}
                                                </div>
                                            </Row>
                                        </Row>
                                    }
                                </Col>
                            ) : (
                                <Col lg={9} className="videoPlayerCol">
                                    <Row style={{ display: 'none' }} className="videoPlayerRow">
                                        {mediaType !== '' &&
                                            <Video
                                                url={videoStream.url}
                                                type={videoStream.streamVideoType}
                                                mediaType={mediaType}
                                                setIde={setIde}
                                                setShow={setShow}
                                                setIsStreamLive={setIsStreamLive}
                                                isItStreamTime={isItStreamTime}
                                                page={'VideoPage'}
                                            />
                                        }
                                    </Row>
                                    <Row style={{ display: 'none', margin: 'auto' }}>
                                        <Col className="d-flex justify-content-start" style={{ padding: 0 }}>
                                            <h4 className="videoTitle">{videoStream.name}</h4>
                                        </Col>
                                    </Row>
                                    <Row style={{ display: 'none', margin: 'auto' }}>
                                        <div className="d-flex justify-content-start description" style={{ padding: 0 }}>
                                            {videoStream.description}
                                        </div>
                                    </Row>
                                </Col>
                            )}
                            <Col>
                                <ListGroup className="videoList">
                                    {videoArray.map((item) => (
                                        <VideoButton id={item.id} name={item.name} type={item.type} thumbnail={item.thumbnail} setIde={setIde} />
                                    ))}{' '}
                                </ListGroup>
                            </Col>
                        </Row>
                    }
                </Container>
                <br />
                {/*  */}
            </div>
        </Container>
    );
}

export default VideoPage;
