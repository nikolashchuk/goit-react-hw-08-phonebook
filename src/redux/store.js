import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactSlice, filterSlice } from './slice';

const rootRedusers = combineReducers({
  contacts: contactSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: rootRedusers,
});
