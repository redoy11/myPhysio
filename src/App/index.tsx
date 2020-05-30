import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../component/Header';

const App: React.FC = () => {
  const Home = <p> Home </p>;
  const About = <p> About </p>;
  return (
    <>
      <Header />
      <Switch>
        <Route path="/about">{About}</Route>
        <Route path="/">{Home}</Route>
      </Switch>
    </>
  );
};

export default App;
