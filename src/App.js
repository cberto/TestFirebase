import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import ListaInMuebles from './component/vistas/ListaInMuebles';
import AppNavbar from './component/layout/AppNavbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme/theme';
import RegisterUsers from './component/security/RegisterUsers';
class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppNavbar />

          <Grid container>
            <Routes>
              <Route path="/"  element={<ListaInMuebles/>} /> 
              <Route path="/auth/registerUser"  element={<RegisterUsers/>} /> 
            </Routes>
          </Grid>

        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
