import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions/missionSlice';
import rocketReducer from './Rocket/rocketSlice';

const Store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketReducer,
  },
});

export default Store;
