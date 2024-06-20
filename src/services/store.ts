import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { ingredientsReducer } from './slices/ingredients';
import { ordersReducer } from './slices/order';
import { constructorReducer } from './slices/constructor';
import { usersReducer } from './slices/auth';
import { orderBuilderReducer } from './slices/orderBuilder';
import { feedsReducer } from './slices/feeds';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  users: usersReducer,
  orders: ordersReducer,
  feeds: feedsReducer,
  orderBuilder: orderBuilderReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
