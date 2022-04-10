import React from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import App from './components/page';

const container = document.getElementById('root');

if (container) {
    createRoot(container).render(
        <React.StrictMode>
            <HashRouter>
                <App />
            </HashRouter>
        </React.StrictMode>,
    );
} else {
    throw new Error('div with id "root" is not founded');
}

