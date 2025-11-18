import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  value: number,
  tempAuthToken: string,
  isAuthenticated: boolean,
  accessToken: string | null,
  registerSuccess: boolean,
  registerError: string,
  forgotPasswordOTP: string,
  isBalanceHidden: boolean
}

const initialState: AuthState = {
  value: 0,
  tempAuthToken: '',
  isAuthenticated: false,
  accessToken: localStorage.getItem("access_token") && localStorage.getItem("access_token"),
  registerSuccess: false,
  registerError: '',
  forgotPasswordOTP: '',
  isBalanceHidden: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    updateTempAuthToken: (state, action: PayloadAction<string>) => {
      state.tempAuthToken = action.payload
    },
    updateIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    updateAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
    updateRegisterSuccess: (state, action: PayloadAction<boolean>) => {
      state.registerSuccess = action.payload
    },
    updateRegisterError: (state, action: PayloadAction<any>) => {
      state.registerError = action.payload
    },
    updateForgotPasswordOTP: (state, action: PayloadAction<string>) => {
      state.forgotPasswordOTP = action.payload
    },
    updateBalanceHidden: (state, action: PayloadAction<boolean>) => {
      state.isBalanceHidden = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateTempAuthToken, updateIsAuthenticated, updateAccessToken, updateRegisterSuccess, updateRegisterError, updateForgotPasswordOTP, updateBalanceHidden } = authSlice.actions

export default authSlice.reducer