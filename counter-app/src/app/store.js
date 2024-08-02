import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});