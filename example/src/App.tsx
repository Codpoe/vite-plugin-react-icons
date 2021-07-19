import React from 'react';
import IconAppConnectivity from 'virtual:vite-icons/carbon/app-connectivity';
import IconAccount from 'virtual:vite-icons/mdi/account';
import IconAlarmOff from 'virtual:vite-icons/mdi/alarm-off';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Icons</p>
        <p>
          <IconAppConnectivity />
          <IconAccount />
          <IconAlarmOff />
        </p>
      </header>
    </div>
  );
}

export default App;
