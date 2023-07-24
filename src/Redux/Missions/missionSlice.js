import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isloading: false,
  error: undefined,
};

export const fetchMissions = createAsyncThunk('missions/fetchMission', async (thunkAPI) => {
  try {
    const response = await axios('https://api.spacexdata.com/v3/missions');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

const missionSlice = createSlice({

  name: 'missions',
  initialState,
  reducers: {
    join: (state, action) => {
      const data = JSON.parse(localStorage.getItem('missions')) || state.missions;
      const newState = data.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, join: true };
      });
      state.missions = newState;
      localStorage.setItem('missions', JSON.stringify(newState));
    },
    leave: (state, action) => {
      const data = JSON.parse(localStorage.getItem('missions')) || state.missions;
      const newState = data.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, join: false };
      });
      state.missions = newState;
      localStorage.setItem('missions', JSON.stringify(newState));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.isloading = false;
        const data = Object.keys(action.payload).map((mission) => {
          const obj = {
            mission_id: action.payload[mission].mission_id,
            mission_name: action.payload[mission].mission_name,
            description: action.payload[mission].description,
            wikipedia: action.payload[mission].wikipedia,
          };
          return obj;
        });
        state.missions = data;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.error = action.payload;
        state.isloading = false;
      });
  },
});

export default missionSlice.reducer;
export const { join, leave } = missionSlice.actions;
