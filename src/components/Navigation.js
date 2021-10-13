import {Link} from "react-router-dom";
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import logo from '../android.png';
import eventData from '../data/events.json';
import {useMediaQuery} from 'react-responsive';


const Navigation = () => {
    const isMobile = useMediaQuery({query: `(max-width: 760px)`});
    return (
        <Navbar bg="dark" fixed="top" variant="dark">

            <Nav defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link className="navLink" as={Link} to="/">Etusivu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="navLink" as={Link} to="/schedule">Aikataulu</Nav.Link>
                </Nav.Item>
            </Nav>
            <Navbar.Brand as={Link} to="/">
                <img
                    src={logo}
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                {/* <div className='navLogoText'>
                    <div>Media</div>
                    <div>Day</div>
                </div> */}
            </Navbar.Brand>
            <Nav>
                <Nav.Item>
                    <Nav.Link className="navLink" as={Link} to="/videos">Videot</Nav.Link>
                </Nav.Item>
                {(isMobile) ? (
                    <NavDropdown className="navLink" align="end" title="Puhujat" id="collasible-nav-dropdown">
                        {eventData.events.map((data) => {
                            return (
                                <NavDropdown.Item as={Link} to={"/event/" + data.videoUrl}>
                                    <div className="navSpeakerNameText">{data.speakerName}</div>
                                    <div className="navSpeakerCompanyText">{data.speakerCompany}</div>
                                </NavDropdown.Item>
                            );
                        })}
                    </NavDropdown>
                ) : (
                    <NavDropdown className="navLink" title="Puhujat" id="collasible-nav-dropdown">
                        {eventData.events.map((data) => {
                            return (
                                <NavDropdown.Item as={Link} to={"/event/" + data.videoUrl}>
                                    <div className="navSpeakerNameText">{data.speakerName}</div>
                                    <div className="navSpeakerCompanyText">{data.speakerCompany}</div>
                                </NavDropdown.Item>
                            );
                        })}
                    </NavDropdown>
                )}

            </Nav>
        </Navbar >
    )
}

export default Navigation;