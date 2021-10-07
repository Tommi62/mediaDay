import React from 'react';
import {Container, Row} from 'react-bootstrap';

import Calendar from '../components/Calendar';

const SchedulePage = () => {
  return (
    <Container fluid>
      <Row>
        <div className="section fbg"></div>
      </Row>
      <div className='pageBody card3'>
        <h1 className='scheduleHeader'>Aikataulu</h1>
        <Row className="calendar">
          <Calendar />
        </Row>
      </div>
    </Container>
  );
};

export default SchedulePage;
