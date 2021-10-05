import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Video from '../components/Video';
import Image from 'react-bootstrap/Image';

import eventData from '../data/events.json';

const EventPage = () => {
  const { id } = useParams();

  const eventResult = eventData.events.find(({ videoUrl }) => videoUrl === id);

  if (!eventResult) {
    return <div>Event {id} was not found :(</div>;
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className='display-4'>{eventResult.name}</h1>
          </Col>
          <Col>Otsikko</Col>
        </Row>
        <Row>
          <Col lg={9}>
            <Video
              url={eventResult.streamUrl}
              type={eventResult.streamVideoType}
            />
          </Col>
          <Col>
            <br />
            <p>
              Päivämäärä: <br /> {eventResult.startDate} {eventResult.startTime}
            </p>
            <p>
              Puhuja:
              <br /> {eventResult.speakerName} <br />
              <Image
                src={eventResult.speakerImage}
                alt={eventResult.speakerName}
                fluid
                rounded
              />
            </p>
            <p>
              Puhujatietoja:
              <br /> {eventResult.speakerDiscription}
            </p>
            <br />
          </Col>
        </Row>
      </Container>
      <br />
      {/*  */}
    </div>
  );
};

export default EventPage;
