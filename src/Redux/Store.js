import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from './Rockets/rocket';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
},
applyMiddleware(thunk));

export default store;
