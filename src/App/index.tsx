import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  const Home = <p> Home </p>;
  const About = <p> About </p>;
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">{About}</Route>
        <Route path="/">{Home}</Route>
      </Switch>
    </>
  );
};

export default App;
