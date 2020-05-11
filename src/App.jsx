import React, { useEffect } from 'react';
import store from './config/store';
import { getAccessTokenRequest } from './ducks/actions';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HOME, SEARCH_PAGE } from './constants/routes';
import Home from './routes/Home';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import SearchPage from './routes/SearchPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e2482f',
    },
  }
});

function App() {
  useEffect(() => {
    const { dispatch } = store;

    dispatch(getAccessTokenRequest());
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path={HOME} component={Home}/>
          <Route exact path={SEARCH_PAGE} component={SearchPage}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
