import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Upravte cestu podle umístění souboru App.js
import './index.css'; // Pokud máte globální CSS soubor, jinak tento řádek odstraňte

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
