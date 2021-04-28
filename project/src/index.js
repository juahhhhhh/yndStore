import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import GlobalStyles  from "./styles/globalStyles";
import Theme from  './styles/theme'
import App from './app';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <Theme>
            <App />
        </Theme>
    </React.StrictMode>,
    document.getElementById("root")
);
