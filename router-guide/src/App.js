import React, { Fragment } from 'react';
import './index.css';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

export default function App() {
  const name = 'John Doe'
  const isAuthenticated = true;
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/about/${name}`}>About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home}/>
          {
            isAuthenticated ?
            <>
            <Route path="/about/:name" component={About}/>
            <Route path="/contact" component={Contact}/>
            </> : <Redirect to="/" />  
          }

          <Route render={() => <h1>404: Page not Found</h1>} />        
        </Switch>
      </main>      
    </Router>

  )
}

// Home Page
const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
)

// About Page
const About = ({match:{params:{name}}}) => (
  // Same as props.match.params.name
  <Fragment>
    { name !== 'John Doe' ? <Redirect to="/" /> : null}
    <h1>About {name}</h1>
    <FakeText />    
  </Fragment>
)

// Contact Page
const Contact = ({history}) => (
  <Fragment>
    <h1>Contact</h1>
    <button onClick={() => history.push('/')}>Go to Home</button>
    <FakeText />
  </Fragment>
)

const FakeText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
)