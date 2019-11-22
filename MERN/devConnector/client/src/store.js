import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk' //this is the middleware
import rootReducer from './reducers'; //combine all reducers into here

const initialState = {};
const middleware = [thunk];

//creating store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
