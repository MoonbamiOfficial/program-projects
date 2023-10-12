
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Projects from './Projects';
import Home from './Home';
import './css/defaults.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
  )
}

export default App;
