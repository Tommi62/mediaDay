import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import TextBlock from '../components/TextBlock';
import Speaker from '../components/Speaker';
import texts from '../data/texts.json';

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Image src="..\media\speakers\mikko_kodisoja.jpg" fluid/>
                    </Col>
                </Row>
                <TextBlock header={texts.homepage.intro}/>
                <TextBlock header={texts.homepage.header1} paragraph={texts.homepage.paragraph1}/>
                <TextBlock header={texts.homepage.header2} paragraph={texts.homepage.paragraph2}/>
                <Row>
                    <Col>
                        <h1>Speakers</h1>
                    </Col>
                </Row>
                <Row>
                    {texts.speakers.map((speaker) => {
                        return <Speaker speaker={speaker} />
                    })}
                </Row>
                <TextBlock header={texts.homepage.header3} paragraph={texts.homepage.paragraph3}/>
            </Container>
        </div>
    )
}

export default Home;