import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
import { save, load } from "redux-localstorage-simple"
import logger from './store/middleware/logger'
import api from './store/middleware/api'
import reducer from "./store/reducer"
import { composeWithDevTools } from "redux-devtools-extension"

export const store = createStore(
  reducer,
  load(),
  composeWithDevTools(applyMiddleware(thunk, save(), logger({ destination: "console" }), api))
)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);