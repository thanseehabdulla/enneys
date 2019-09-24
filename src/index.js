import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';


import { loadToDoList } from './redux/Actions';
import toDoApp from './redux/Reducers';
import rootSaga from './redux/Sagas';

import { BrowserRouter } from 'react-router-dom';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(toDoApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadToDoList());

render( <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
