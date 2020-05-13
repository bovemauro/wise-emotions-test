import React, { useEffect } from 'react';
import store from './config/store';
import { getAccessTokenRequest } from './ducks/actions';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HOME, SEARCH_PAGE, PET_PAGE } from './constants/routes';
import Home from './routes/Home';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import SearchPage from './routes/SearchPage';
import { Provider } from 'react-redux';
import PetProfile from './routes/PetProfile';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e2482f',
    },
  },
});

function App() {
  useEffect(() => {
    const { dispatch } = store;

    dispatch(getAccessTokenRequest());
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path={HOME} component={Home} />
            <Route exact path={SEARCH_PAGE} component={SearchPage} />
            <Route exact path={PET_PAGE} component={PetProfile} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
