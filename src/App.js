import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/LandingPage';

function App() {
  // return (
  //   <div>
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //       </a>
  //       </header>
  //     </div>
  //     <LandingPage className="Landing-page" />
  //   </div>
  // );
  return <LandingPage classname="landing-page" />
}

export default App;
// const color = [{ hex: '#fdecc9', color: 'biege}, {hex: "#214ba6", color: 'easydark-blue'}]
