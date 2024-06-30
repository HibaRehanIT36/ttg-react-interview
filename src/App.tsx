import * as React from 'react';

import Todo from './views/Todo';
import theme from './assets/jss/theme';
import { Box } from '@material-ui/core';
import packageJson from '../package.json';
import { SnackbarProvider } from 'notistack';
import MainLayout from './layout/mainLayout';
import { createBrowserHistory } from 'history';
import LoadingPage from './views/components/LoadingPage';
import { Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

const history = createBrowserHistory({ basename: '.' });

const App = () => {
  React.useEffect(() => {
    console.log('Current Version ', packageJson.version);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <React.Suspense fallback={<LoadingPage />}>
          <Router history={history}>
            <MainLayout>
              <Switch>
                <Route exact path="/">
                  <Box>Main Content</Box>
                </Route>
                <Route exact path="/tasks">
                  <Todo />
                </Route>
              </Switch>
            </MainLayout>
          </Router>
        </React.Suspense>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
};

export default App;
