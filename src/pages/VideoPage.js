import '../css/VideoPage.css'

import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import Video from '../components/Video';
import VideoButton from '../components/VideoButton';

import mediaData from '../data/MediaData.json';

const VideoPage = () => {
    const [ide, setIde] = useState(0);
    const [videoArray, setVideoArray] = useState([]);
    const [videoStream, setVideoStream] = useState({});
    const [mediaType, setMediaType] = useState('');
    const [show, setShow] = useState(false);
    const [isStreamLive, setIsStreamLive] = useState(false);

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

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="display-5">Tapahtumaan liittyvät videot löytyvät täältä</h2>
                    </Col>
                </Row>
                {videoStream !== {} &&
                    <Row>
                        {show ? (
                            <Col lg={9} style={{ marginLeft: '15px' }}>
                                <Row>
                                    {mediaType !== '' &&
                                        <Video url={videoStream.url} type={videoStream.streamVideoType} mediaType={mediaType} setIde={setIde} setShow={setShow} setIsStreamLive={setIsStreamLive} />
                                    }
                                </Row>
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
                            </Col>
                        ) : (
                            <Col lg={9} style={{ marginLeft: '15px' }}>
                                <Row style={{ display: 'none' }}>
                                    {mediaType !== '' &&
                                        <Video url={videoStream.url} type={videoStream.streamVideoType} mediaType={mediaType} setIde={setIde} setShow={setShow} setIsStreamLive={setIsStreamLive} />
                                    }
                                </Row>
                                <Row style={{ display: 'none' }}>
                                    <Col className="d-flex justify-content-start" style={{ padding: 0 }}>
                                        <h4 className="videoTitle">{videoStream.name}</h4>
                                    </Col>
                                </Row>
                                <Row style={{ display: 'none' }}>
                                    <div className="d-flex justify-content-start description" style={{ padding: 0 }}>
                                        {videoStream.description}
                                    </div>
                                </Row>
                            </Col>
                        )}
                        <Col>
                            <ListGroup className="videoList">
                                {videoArray.map((item) => (
                                    <VideoButton id={item.id} name={item.name} thumbnail={item.thumbnail} setIde={setIde} />
                                ))}{' '}
                            </ListGroup>
                        </Col>
                    </Row>
                }
            </Container>
            <br />
            {/*  */}
        </div>
    );
}

export default VideoPage;
