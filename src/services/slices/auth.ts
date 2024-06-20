import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';
import {
  TLoginData,
  loginUserApi,
  TRegisterData,
  registerUserApi,
  logoutApi,
  getUserApi,
  updateUserApi
} from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { deleteCookie, setCookie } from '../../utils/cookie';

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }: TLoginData) => {
    const result = await loginUserApi({ email, password });
    setCookie('accessToken', result.accessToken);
    localStorage.setItem('accessToken', result.accessToken);
    localStorage.setItem('refreshToken', result.refreshToken);
    return result.user;
  }
);

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ email, name, password }: TRegisterData) => {
    const result = await registerUserApi({ email, name, password });
    if (result.success) {
      setCookie('accessToken', result.accessToken);
      localStorage.setItem('accessToken', result.accessToken);
      localStorage.setItem('refreshToken', result.refreshToken);
    }
    return result;
  }
);

export const logoutUser = createAsyncThunk('user/logout', async () => {
  const result = await logoutApi();
  deleteCookie('accessToken');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
});

export const checkUserAuth = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('user/checkAuth', async (_, { dispatch }) => {
  if (localStorage.getItem('accessToken')) {
    getUserApi()
      .then((res) => {
        dispatch(setUser(res.user));
      })
      .catch(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      })
      .finally(() => {
        dispatch(setAuthChecked(true));
      });
  } else {
    dispatch(setAuthChecked(true));
  }
});

export const updateUser = createAsyncThunk(
  'user/update',
  async ({ email, name, password }: TRegisterData) => {
    const result = await updateUserApi({ email, name, password });
    return result;
  }
);

export interface TUserState {
  // флаг для статуса проверки токена пользователя
  isAuthChecked: boolean;
  // данные текущего пользователя
  user: TUser | null;
  // ошибка авторизации если есть
  error: string | null;
}

export const initialState: TUserState = {
  isAuthChecked: false,
  user: null,
  error: null
};

export const users = createSlice({
  name: 'users',
  initialState,
  selectors: {
    getUser: (state) => state.user,
    getAuthChecked: (state) => state.isAuthChecked,
    getError: (state) => state.error
  },
  extraReducers: (builder) => {
    builder
      // Регистрация
      .addCase(registerUser.rejected, (state, action) => {
        state.user = null;
        state.error = action.error.message ?? null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuthChecked = true;
      })
      // Логин
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.error = action.error.message ?? null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      // Логаут
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = null;
      })
      // Обновление данных пользователя
      .addCase(updateUser.pending, (state) => {
        state.error = '';
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isAuthChecked = false;
        state.error = action.error.message!;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isAuthChecked = true;
        state.user = action.payload.user;
      });
  },
  reducers: {
    setAuthChecked: (state, action: PayloadAction<boolean>) => {
      state.isAuthChecked = action.payload;
    },
    setUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    }
  }
});

export const usersReducer = users.reducer;
export const { setAuthChecked, setUser } = users.actions;
export const { getUser, getAuthChecked, getError } = users.selectors;
