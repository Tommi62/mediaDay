import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {useParams} from 'react-router';
import Video from '../components/Video';
import Image from 'react-bootstrap/Image';

import eventData from '../data/events.json';
import {useMediaQuery} from 'react-responsive';

const EventPage = () => {
  const isMobile = useMediaQuery({query: `(max-width: 760px)`});
  const {id} = useParams();

  const eventResult = eventData.events.find(({videoUrl}) => videoUrl === id);

  if (!eventResult) {
    return <div>Event {id} was not found :(</div>;
  }

  return (
    <Container fluid>
      <Row>
        <div className="section fbg"></div>
      </Row>
      <div className='pageBody card3'>
        <Container>
          <Row>
            <Col>
              <h1 className='display-4'>{eventResult.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={9} className='speakerVideo'>
              <Video
                url={eventResult.streamUrl}
                type={eventResult.streamVideoType}
              />
            </Col>
            <Col className={'speakerCard' + ((isMobile) ? ('') : (' card3'))}>
              <h5>
                {eventResult.speakerName}
              </h5>
              <p>{eventResult.speakerCompany}</p>
              <Image
                src={eventResult.speakerImage}
                alt={eventResult.speakerName}
                fluid
                rounded
              />
              <p className='speakerDescription'>
                {eventResult.speakerDiscription}
              </p>
              <p className='speakerShowtimeText'>
                Media Day Puheenvuoro:
              </p>
              <p>
                {eventResult.startDate} {eventResult.startTime}
              </p>
            </Col>
          </Row>
        </Container>
        <br />
        {/*  */}
      </div>
    </Container>
  );
};

export default EventPage;
