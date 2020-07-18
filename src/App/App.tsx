import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../component/Home/Home';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#80CBC4',
        main: '#00897B',
        dark: '#004D40',
        contrastText: 'white',
      },
    },
  });
  const About = <p> About </p>;

  return (
    <>
      <ThemeProvider theme={theme}>
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
