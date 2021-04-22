import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Timer from './Components/Timer';
import ServerOverloaded from './Components/ServerOverloaded';
import FilterCities from './Components/FilterCities';
import WidgetPromises from './Components/WidgetPromises';
import ColoredBobs from './Components/ColoredBobs';
import ImageCSSIssue from './Components/ImageCSSIssue';

function App() {

  return (
    <Router>
      <header class='App-header'>App</header>
      <div class='App-body'>
        <div class='App-nav'>
          <nav>
            <ul>
              <li>  
                <Link to='/timer'>Timer</Link>
              </li>
              <li>
                <Link to='/server_overloaded'>Server overloaded</Link>
              </li>
              <li>
                <Link to='/filter_cities'>Filter cities</Link>
              </li>
              <li>
                <Link to='/widget_promises'>One widget for a few promises</Link>
              </li>
              <li>
                <Link to='/colored_bobs'>Colored bobs by CSS specificity</Link>
              </li>
              <li>
                <Link to='/image_css_issue'>Image CSS issue</Link>
              </li>
            </ul>
          </nav>
        </div>
      
        <div class='App-content'>
          <Switch>
            <Route path='/timer' component={Timer}></Route>
            <Route path='/server_overloaded' component={ServerOverloaded}></Route>
            <Route path='/filter_cities' component={FilterCities}></Route>
            <Route path='/widget_promises' component={WidgetPromises}></Route>
            <Route path='/colored_bobs' component={ColoredBobs}></Route>
            <Route path='/image_css_issue' component={ImageCSSIssue}></Route>
          </Switch>
        </div>
      </div>

      <footer class='App-footer'>Footer</footer>
    </Router>
  )
}

export default App;
