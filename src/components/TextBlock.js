import React from 'react';
import { Col, Row} from 'react-bootstrap';


const TextBlock= ({ header, subHeader, paragraph }) => {
    return (
        <Row className="block">
            <Col>
                <Row>
                    <Col className="blockHeader">{header}</Col>
                </Row>
                <Row>
                    <Col className="blockParagraph">{paragraph}</Col>
                </Row>
            </Col>
        </Row>
        )
}

export default TextBlock;