import React from 'react';
import {Col, Image, Row} from 'react-bootstrap';


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
      <Row className="speakerRow card4">
        <Col md={4} xs={12} className="alignCenter">
          <Image className="speakerImage card2" src={speaker.imageUrl} fluid roundedCircle />
        </Col>
        <Col md={8} xs={12} >
          <h3 className='speakerName'>{speaker.name}</h3>
          <h4 className='speakerCompany'>{speaker.company}</h4>
          <p className='speakerText'>{speaker.description}</p>
        </Col>
      </Row>
    </Row>
  )
}

export default Speaker;