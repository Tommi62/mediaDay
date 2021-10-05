import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import Speaker from '../components/Speaker';
import texts from '../data/texts.json';
import TextCarousel from './../components/TextCarousel';
import FlipCountdown from './../components/FlipCountdown';
import moment from 'moment';
import mediaData from '../data/MediaData.json';


const times = mediaData.media.map((data) => {
    return data.startTime;
});

const now = moment().format("YYYY-MM-DD HH:mm:ss");
const compareTime = moment(now, "YYYY-MM-DD HH:mm:ss");

const closest = times.reduce((prev, curr) => {
    const currentCompare = moment(curr, "YYYY-MM-DD HH:mm:ss").diff(compareTime, "minutes");
    const previousCompare = moment(prev, "YYYY-MM-DD HH:mm:ss").diff(compareTime, "minutes");
    if (currentCompare < previousCompare && currentCompare >= 0) {
        return curr;
    } else return prev;
});

console.log('closest: ' + closest);

const Home = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <div className="section fbg"></div>
                </Row>
                <Row className='homeBody card3'>
                    <Col xs={12} lg={6}>
                        <Container fluid className='carouselContainer'>
                            <FlipCountdown time={closest} />
                            <TextCarousel className='carousel' textArray={texts}></TextCarousel>
                        </Container>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Container fluid>
                            {/* <h1>Puhujat</h1> */}
                            {texts.speakers.map((speaker) => {
                                return <Speaker speaker={speaker} />
                            })}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;