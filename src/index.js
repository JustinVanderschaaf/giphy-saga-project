
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
    // yield takeEvery('SET_CATEGORIES', )
    yield takeEvery('GET_SEARCH', getSearch)
    yield takeEvery("DELETE_GIF", deleteGif);
    yield takeEvery('POST_FAV', postFav)

}

function* postFav(action) {
console.log('made it to postFav');
yield axios.post('api/favorite', action.payload)
console.log('action.payload is', action.payload);
yield put({
    type: 'FETCH_FAVS'
})
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



function* setCategory() {
    console.log('in setCategory generator function');
    let response = yield axios.put('/:id')
    
}

function* getSearch(action) {

    console.log('made it to getSearch', action.payload.search.searchQuery);
    let response = yield axios.get(`api/category/search/${action.payload.search.searchQuery}`)
    console.log('response is ', response.data);
    yield put({
        type: 'SET_SEARCH',
        payload: response.data
    })
    
    
}

function* deleteGif(action) {
    console.log("in deleteGif fancy", action.payload);
  
    // delete element data to the server
    yield axios.delete(`/api/favorite/${action.payload}`);
  
    // Run the fetch
    yield put({
      type: "FETCH_FAVS",
    });
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
