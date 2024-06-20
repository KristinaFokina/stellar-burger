<<<<<<< HEAD
import { combineReducers, configureStore } from '@reduxjs/toolkit';
=======
import { configureStore } from '@reduxjs/toolkit';
>>>>>>> ac40a997d38dcffa4ae8e0725ddf13bd1d85c75a

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
<<<<<<< HEAD
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
=======

const rootReducer = () => {}; // Заменить на импорт настоящего редьюсера
>>>>>>> ac40a997d38dcffa4ae8e0725ddf13bd1d85c75a

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
