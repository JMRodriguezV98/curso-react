import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './components/CounterApp';
import { FirstApp } from './components/FirstApp';
import './styles.css';
// import { App } from './components/App'

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
    <React.StrictMode>
        <CounterApp value={ 0 }/>
    </React.StrictMode>
)
