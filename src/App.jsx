
import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import WebsiteLaunchCountdown from './pages/projects/website-launch-countdown/WebsiteLaunchCountdown';
import TextToSpeech from './pages/projects/text-to-speech/TextToSpeech';
import './styles/defaults.scss';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/home" element={<Home />}/> 
              <Route exact path="/projects" element={<Projects />}/>
              <Route exact path="/projects/wlc" element={<WebsiteLaunchCountdown />}/>
              <Route exact path="/projects/tts" element={<TextToSpeech />}/>
            </Switch>
          </main>
        </div>
      </Router>
  )
} 

export default App;
