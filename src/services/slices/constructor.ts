import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { TConstructorIngredient } from '@utils-types';

export type TConstructorState = {
  constructorItems: {
    bun: TConstructorIngredient | null;
    ingredients: TConstructorIngredient[];
  };
};

export const initialState: TConstructorState = {
  constructorItems: {
    bun: null,
    ingredients: []
  }
};

const burgerConstructor = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    resetConstructor: (state) => (state = initialState),
    addConstructorItem: (state, action) => {
      const type = action.payload.type;

      if (type === 'bun') {
        state.constructorItems.bun = { ...action.payload, id: uuidv4() };
      } else {
        state.constructorItems.ingredients.push({
          ...action.payload,
          id: uuidv4()
        });
      }
    },
    removeConstructorItem: (
      state: TConstructorState,
      action: PayloadAction<TConstructorIngredient>
    ) => {
      state.constructorItems.ingredients =
        state.constructorItems.ingredients.filter(
          (el) => el.id !== action.payload.id
        );
    }
  },
  selectors: {
    getConstructorSelector: (state) => state
  }
});

export const constructorReducer = burgerConstructor.reducer;
export const { getConstructorSelector } = burgerConstructor.selectors;
export const { resetConstructor, addConstructorItem, removeConstructorItem } =
  burgerConstructor.actions;
