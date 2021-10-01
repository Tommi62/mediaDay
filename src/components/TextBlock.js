import React from 'react';
import {Col, Row} from 'react-bootstrap';


const TextBlock = ({header, paragraph}) => {
    console.log('block: ' + header + ' + ' + paragraph);
    if (paragraph == null) {
        return (
            <Col className="block card-1">
                <Row>
                    <Col className="blockHeader">{header}</Col>
                </Row>
            </Col>
        )
    } else return (
        <Col className="block card-1">
            <Row>
                <Col className="blockHeader">{header}</Col>
            </Row>
            <Row>
                <Col className="blockParagraph">{paragraph}</Col>
            </Row>
        </Col>
    )
}

export default TextBlock;