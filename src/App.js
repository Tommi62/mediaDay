import './App.css';

import { Switch, Route } from "react-router-dom";

import Navigation from './components/Navigation'
import About from './pages/About'
import PromoVideo from './pages/PromoVideo';
import EventPage from './pages/EventPage';
import SchedulePage from './pages/SchedulePage';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';

const App = () => {
  return (
    <div className="App">

      <Navigation />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About name="Juha" />
        </Route>
        <Route path="/videos">
          <VideoPage />
        </Route>
        <Route path="/schedule">
          <SchedulePage />
        </Route>
        <Route path="/promovideo">
          <PromoVideo />
        </Route>
        <Route path="/event/:id" children={<EventPage />} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

