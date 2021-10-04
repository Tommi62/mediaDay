import {Link} from "react-router-dom";
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../logo.svg';


const Navigation = () => {
    return (
        <Navbar bg="dark" fixed="top" variant="dark">
            <Navbar.Brand as={Link} to="/">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>

            <Nav defaultActiveKey="/home" className="me-auto">
                <Nav.Item>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/promovideo">Tapahtuman promo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/event/mediaday-123">Mediaday event linkki</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/event/mediaday-567">Mediaday event 567</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/videos">Videot</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default Navigation;