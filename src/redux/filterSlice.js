import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setQueryFilter(_, action) {
      return action.payload;
    },
  },
});

export const { setQueryFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
