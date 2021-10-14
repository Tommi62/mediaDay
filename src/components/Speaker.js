import React from 'react';
import {Col, Image, Row} from 'react-bootstrap';

const Speaker = ({speaker}) => {

  return (
    <Row className=" justify-content-md-center">
      <Row className="speakerRow card4">
        <Col md={4} xs={12} xl={12} xxl={4} className="alignCenter">
          <Image className="speakerImage" src={speaker.imageUrl} fluid roundedCircle />
        </Col>
        <Col md={8} xs={12} xl={12} xxl={8} >
          <h3 className='speakerName'>{speaker.name}</h3>
          <h4 className='speakerCompany'>{speaker.company}</h4>
          <p className='speakerText'>{speaker.description}</p>
        </Col>
      </Row>
    </Row>
  )
}

export default Speaker;