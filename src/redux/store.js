import { configureStore } from '@reduxjs/toolkit'
import AuthUser from './userSlice'

export const store = configureStore({
  reducer : {
    userReducer : AuthUser
  }
})


