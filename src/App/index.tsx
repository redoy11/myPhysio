import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../component/Header';
import Home from '../component/Home';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#7FCD46',
        main: '#4A9F04',
        dark: '#0F4C00',
        contrastText: 'white',
      },
    },
  });
  const About = <p> About </p>;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route path="/about" exact={true}>
            {About}
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
};

export default App;
