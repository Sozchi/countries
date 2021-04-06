import React from "react";
// import logo from './logo.svg';
import './App.css';

function App(props)
{
  let data = props.data;
  let countryList = data.map( ( list ) => 
    <li key={list.numericCode} className="allCountries">{list.name}</li>
  );
  return (
    <div className="App">
      <ul>{countryList}</ul>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
