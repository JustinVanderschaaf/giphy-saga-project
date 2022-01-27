import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

function* rootSaga(action) {
   
}

const sagaMiddleware = createSagaMiddleware()

const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return action.payload;
        default:
                return state;
    }
}

const favReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVS':
            return action.payload;
        default:
            return state;
    }
}


const store = createStore(
    combineReducers({
        searchReducer,
        favReducer
    }), 
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
