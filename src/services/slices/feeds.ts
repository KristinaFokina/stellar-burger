import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TOrdersData } from '@utils-types';
import { getFeedsApi } from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFeeds = createAsyncThunk('order/getFeeds', async () => {
  const result = await getFeedsApi();
  return result;
});

export const initialState: TOrdersData = {
  orders: [],
  total: 0,
  totalToday: 0
};

export const feeds = createSlice({
  name: 'feeds',
  initialState,
  selectors: {},
  extraReducers: (builder) => {
    builder.addCase(getFeeds.fulfilled, (state, action) => {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    });
  },
  reducers: {}
});

export const feedsReducer = feeds.reducer;
