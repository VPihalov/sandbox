import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Timer from './Components/Timer';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/timer'>Timer</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/timer' component={Timer}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
