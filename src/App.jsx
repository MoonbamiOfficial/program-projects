
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import './css/defaults.css';
import AgeCalculatorApp from './projects/v1.0-age-calculator-app/AgeCalculatorApp';

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
              <Route path="/home">
                <Home />
              </Route>  
              <Route path="/projects">
                <Projects />
              </Route>
              <Route exact path="/age-calculator-app">
                <AgeCalculatorApp />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
  )
}

export default App;
