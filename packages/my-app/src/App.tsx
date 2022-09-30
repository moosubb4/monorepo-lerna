import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryPayload } from "../../shared/interface/simple-query";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React JA
        </a>

        <button
          onClick={(): void => {
            fetch("http://localhost:3000", {})
              .then((response) => response.json())
              .then((data: QueryPayload) => console.log(data.payload));
          }}
        >
          GET SOME DATA
        </button>
      </header>
    </div>
  );
}

export default App;
