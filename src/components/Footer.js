
import {Row, Col, Container} from 'react-bootstrap';
import texts from '../data/texts.json';
import fb from '../fb_icon.svg';
import ig from '../ig_icon.svg';
import twitter from '../twitter_icon.svg';



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
                    <Row className="socials">
                        <img src={fb} alt="React Logo" />
                        <img src={ig} alt="React Logo" />
                        <img src={twitter} alt="React Logo" />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;