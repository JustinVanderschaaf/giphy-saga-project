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
   yield takeEvery('FETCH_CATEGORIES', fetchCategories)

    yield takeEvery('FETCH_FAVS', fetchFavs)
}

function* fetchFavs() {
    console.log('made it to fetchFavs');
    let response = yield axios.get('/api/favorite')
    console.log('response is', response.data);
    yield put({
        type: 'SET_FAVS',
        payload: response.data
    })
}

function* fetchCategories() {
    console.log(' made it to fetchSearchResults');
    let response = yield axios.get('/api/category')
    console.log('response is', response.data);
    yield put({
        type: 'SET_CATEGORIES',
        payload: response.data
    })
}
const sagaMiddleware = createSagaMiddleware()

const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return action.payload;
        default:
            return state;
    }
}
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
        favReducer, 
        categoryReducer
    }), 
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
