import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'react-redux';

import userReducer from './reducers/userReducer'
import dataReducer from './reducers/dataReducer'
import uiReducer from './reducers/uiReducer'


const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  data: dataReducerm,
  UI: uiReducer
})

const store = createStore(reducers, initialState, compose(applyMiddleware(...middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())));


export default store