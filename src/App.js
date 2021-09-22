import './App.css';

import { Switch, Route, Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

import About from './pages/About'
import PromoVideo from './pages/PromoVideo';
import EventPage from './pages/EventPage';
import SchedulePage from './pages/SchedulePage';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
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
        </Nav>
      </Navbar>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About name="Juha" />
        </Route>
        <Route path="/schedule">
          <SchedulePage />
        </Route>
        <Route path="/promovideo">
          <PromoVideo />
        </Route>
        <Route path="/event/:id" children={<EventPage />} />
        <Route path="/">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

