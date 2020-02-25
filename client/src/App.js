import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { PrivateRoute } from './components/PrivateRoute'
import Navbar from './components/Navbar/Navbar'
import Main from './containers/Main';
import Dashboard from './containers/Dashboard'
import Landing from './containers/Landing'
import NotificationBox from './components/NotificationBox'

function App() {  

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <NotificationBox />
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/register">
            <Landing />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </Provider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
