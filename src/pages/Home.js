import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import TextBlock from '../components/TextBlock';
import Speaker from '../components/Speaker';
import texts from '../data/texts.json';

const Home = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <div class="section fbg"></div>
                </Row>
                <Row>
                    <TextBlock header={texts.homepage.intro} />
                    <TextBlock header={texts.homepage.header1} paragraph={texts.homepage.paragraph1} />
                </Row>
                <Row>
                    <TextBlock header={texts.homepage.header2} paragraph={texts.homepage.paragraph2} />
                    <TextBlock header={texts.homepage.header3} paragraph={texts.homepage.paragraph3} />
                </Row>
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
            </Container>
        </div>
    )
}

export default Home;