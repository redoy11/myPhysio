import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../component/Header';
import Slider from '../component/Slider';

const App: React.FC = () => {
  const Home = <Slider />;
  const About = <p> About </p>;
  return (
    <>
      <Header />
      <Switch>
        <Route path="/about" exact={true}>
          {About}
        </Route>
        <Route path="/" exact={true}>
          {Home}
        </Route>
      </Switch>
    </>
  );
};

export default App;
