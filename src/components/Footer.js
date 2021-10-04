
import {Row, Col, Container} from 'react-bootstrap';
import texts from '../data/texts.json';

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row>
                <Col className="footerTextBlock">
                    <Row className="footerText">{texts.footer[0].subHeader}</Row>
                    <Row className="footerText">{texts.footer[0].body}</Row>
                </Col>
                <Col className="footerTextBlock">
                    <Row className="footerText">{texts.footer[1].header}</Row>
                    <Row className="footerText">{texts.footer[1].body}</Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;