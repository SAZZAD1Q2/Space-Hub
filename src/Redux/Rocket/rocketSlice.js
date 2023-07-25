import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const initialState = {
  rockets: [],
  isloading: false,
  error: null,
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async (ThunkApi) => {
  try {
    const response = await axios('https://api.spacexdata.com/v4/rockets');
    return response.data;
  } catch (error) {
    return ThunkApi.rejectWithValue('something went wrong');
  }
});
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserve: (state, action) => {
      const data = JSON.parse(localStorage.getItem('rockets')) || state.rockets;
      const newState = data.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      state.rockets = newState;
      localStorage.setItem('rockets', JSON.stringify(newState));
    },
    cancel: (state, action) => {
      const data = JSON.parse(localStorage.getItem('rockets')) || state.rockets;
      const newState = data.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      state.rockets = newState;
      localStorage.setItem('rockets', JSON.stringify(newState));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isloading = false;
        const rocketdata = Object.keys(action.payload).map((rocket) => {
          const data = {
            id: action.payload[rocket].id,
            rocket_name: action.payload[rocket].name,
            description: action.payload[rocket].description,
            flickr_images: action.payload[rocket].flickr_images[0],
            wikipedia: action.payload[rocket].wikipedia,
          };
          return data;
        });
        state.rockets = rocketdata;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});
export default rocketSlice.reducer;
export const { reserve, cancel } = rocketSlice.actions;
