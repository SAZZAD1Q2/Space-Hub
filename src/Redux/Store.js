import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions/missionSlice';

const Store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default Store;
