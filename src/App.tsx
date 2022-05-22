import React from 'react';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@material-ui/core/CssBaseline';
import RouterPages from './Pages/router-pages';


function App(): JSX.Element {
  return (
    <SnackbarProvider maxSnack={3}>
      <CssBaseline />
      <RouterPages />
    </SnackbarProvider>
  );
}

export default App;