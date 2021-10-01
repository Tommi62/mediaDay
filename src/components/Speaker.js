import React from 'react';
import {Col, OverlayTrigger, Image, Popover, Row} from 'react-bootstrap';


/* const Speaker = ({speaker}) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{speaker.name}</Popover.Header>
      <Popover.Body>
        {speaker.company}
        <br /> <br />
        {speaker.description}
      </Popover.Body>
    </Popover>
  );

  return (
    <Col xs={6} md={3}>
      <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
        <Image className="speakerImage card-2" src={speaker.imageUrl} fluid roundedCircle />
      </OverlayTrigger>
    </Col>
  )
} */

const Speaker = ({speaker}) => {

  return (
    <Row className=" justify-content-md-center">
      <Row className="speakerRow card3">
        <Col md={3} className="alignCenter">
          <Image className="speakerImage card2" src={speaker.imageUrl} fluid roundedCircle />
        </Col>
        <Col md={9} >
          {speaker.name}
          <br /> <br />
          {speaker.company}
          <br /> <br />
          {speaker.description}
        </Col>
      </Row>
    </Row>
  )
}

export default Speaker;