// import { TRegisterData, loginUserApi } from "@api";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const loginUser = createAsyncThunk(
//   'user/loginUser',
//   async ({ email, password }: Omit<TRegisterData, 'name'>) => {
//     return await loginUserApi({ email, password })
//   }
// );

// export const userSlice = createSlice(
// {
//   name: 'user',
//   initialState,
//     extraReducers: (builder) => {
//       builder
//             .addCase(loginUser.pending, (state) => {
//           state.loginUserRequest = true;
//           state.loginUserError = null;
//             })
//       .addCase(loginUser.rejected, (state, action) => {
//             state.loginUserRequest = false;
//           state.loginUserError = action.payload;
//           state.isAuthChecked = true;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//               state.data = action.payload.user;
//           state.loginUserRequest = false;
//                 state.isAuthenticated = true;
//           state.isAuthChecked = true;
//       }
//   }
// }
// );
