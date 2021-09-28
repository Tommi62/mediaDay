import React from 'react';
import { Col, OverlayTrigger, Image, Popover } from 'react-bootstrap';


const Speaker= ({ speaker }) => {
    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">{speaker.name}</Popover.Header>
          <Popover.Body>
            {speaker.company}
            <br/> <br/> 
            {speaker.description}
          </Popover.Body>
        </Popover>
      );

    return (
        <Col xs={6} md={3}>
            <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
                <Image className="speakerImage" src={speaker.imageUrl} fluid roundedCircle />
            </OverlayTrigger>
        </Col>
        )
}

export default Speaker;