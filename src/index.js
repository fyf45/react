import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import configStore from './store'
import "antd-mobile/dist/antd-mobile.css"
import App from './App';

import registerServiceWorker from './registerServiceWorker';
let store = configStore()

ReactDOM.render(
    (
        <Provider store={ store }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>    
    ), 
    document.getElementById('root')
);
registerServiceWorker();

export { store }