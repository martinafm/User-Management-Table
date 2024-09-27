import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
