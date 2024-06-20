import { createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOrdersApi } from '@api';

export const getOrders = createAsyncThunk('order/getOrders', getOrdersApi);

export type TOrdersState = {
  orders: TOrder[];
};

export const initialState: TOrdersState = {
  orders: []
};

export const orders = createSlice({
  name: 'orders',
  initialState,
  selectors: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
  reducers: {}
});

export const ordersReducer = orders.reducer;
