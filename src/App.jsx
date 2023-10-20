
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import './css/defaults.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>  
              <Route exact path="/projects">
                <Projects />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
  )
} 

export default App;
