import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import holbertonLogo from './Holberton_Logo.png';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={holbertonLogo} className="App-logo" alt="logo" />
                <h1>School dashboard</h1>
            </header>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <div className="form-group">
                    <label htmlFor="email" onClick={() => handleLabelClick('email')}>Email:</label>
                    <input type="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" onClick={() => handleLabelClick('password')}>Password:</label>
                    <input type="password" id="password" />
                </div>
                <button type="button">OK</button>
            </div>
            <footer className="App-footer">
                <p>{getFooterCopy(true)}</p>
                <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
            </footer>
        </div>
    );
}

export default App;