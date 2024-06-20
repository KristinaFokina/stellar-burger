import { getIngredientsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { createSelector } from '@reduxjs/toolkit';

//Создает асинхронный экшн `getIngredients`, который использует функцию `getIngredientsApi` для получения данных об ингредиентах с сервера. `createAsyncThunk` автоматически обрабатывает состояния загрузки, выполнения и ошибки асинхронного запроса.
export const getIngredients = createAsyncThunk(
  'ingredients/getAll',
  getIngredientsApi
);
//Определяет тип TypeScript для состояния ингредиентов, включая массив ингредиентов ingredients, флаг загрузки loading и строку для ошибки error.
export type TIngredientsState = {
  ingredients: TIngredient[];
  loading: boolean;
  error: string | null;
};
//Определяет начальное состояние для редьюсера, устанавливая пустой массив ингредиентов, флаг загрузки в true и null для ошибки.
export const initialState: TIngredientsState = {
  ingredients: [],
  loading: true,
  error: null
};
//Создает редьюсер ingredients и связанные с ним экшны для управления состоянием ингредиентов. В extraReducers обрабатываются различные состояния асинхронного экшна getIngredients:
//- .pending устанавливает loading в true и сбрасывает ошибку в начале запроса.
//- .rejected устанавливает сообщение об ошибке, если запрос завершился неудачно.
//- .fulfilled обновляет состояние ингредиентов данными, полученными от сервера, и устанавливает loading в false.
export const ingredients = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.ingredients = action.payload;
        }
      });
  }
});

export const ingredientsReducer = ingredients.reducer;
//Создает селекторы getBuns, getMains, getSauces и getAllIngredients с использованием библиотеки @reduxjs/toolkit. Эти селекторы позволяют извлекать и трансформировать данные из состояния Redux для различных типов ингредиентов (булки, основные ингредиенты, соусы) и возвращать полный список ингредиентов соответственно. Селекторы оптимизированы и пересчитывают результаты только при изменении соответствующих частей состояния.
export const getBuns = createSelector(
  (state) => state.ingredients.ingredients,
  (items: TIngredient[]) => items.filter((value) => value.type === 'bun')
);

export const getMains = createSelector(
  (state) => state.ingredients.ingredients,
  (items: TIngredient[]) => items.filter((value) => value.type === 'main')
);
export const getSauces = createSelector(
  (state) => state.ingredients.ingredients,
  (items: TIngredient[]) => items.filter((value) => value.type === 'sauce')
);

export const getAllIngredients = createSelector(
  (state) => state.ingredients.ingredients,
  (items: TIngredient[]) => items
);
