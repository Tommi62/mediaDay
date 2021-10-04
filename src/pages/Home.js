import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import Speaker from '../components/Speaker';
import texts from '../data/texts.json';
import TextCarousel from './../components/TextCarousel';

const Home = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <div className="section fbg"></div>
                </Row>
                <Row className='homeBody card3'>
                    <Container fluid className='carouselContainer'>
                        <TextCarousel className='carousel' textArray={texts}></TextCarousel>
                    </Container>
                    <Row>
                        <Col>
                            <h1>Puhujat</h1>
                        </Col>
                    </Row>
                    <Container fluid>
                        {texts.speakers.map((speaker) => {
                            return <Speaker speaker={speaker} />
                        })}
                    </Container>
                </Row>
            </Container>
        </div>
    )
}

export default Home;