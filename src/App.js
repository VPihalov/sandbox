import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Timer from './Components/Timer';
import ServerOverloaded from './Components/ServerOverloaded';


function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/timer'>Timer</Link>
            </li>
            <li>
              <Link to='/server_overloaded'>Server overloaded</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/timer' component={Timer}></Route>
          <Route path='/server_overloaded' component={ServerOverloaded}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
