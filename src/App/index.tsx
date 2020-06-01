import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../component/Header';
import Home from '../component/Home';

const App: React.FC = () => {
  const About = <p> About </p>;

  return (
    <>
      <Header />
      <Switch>
        <Route path="/about" exact={true}>
          {About}
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
