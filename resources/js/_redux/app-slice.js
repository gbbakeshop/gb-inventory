import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isTopBarToggled: true,
    branches:[]
  },
  reducers: {
    setIsTopbarToggled: (state, action) => {
      state.isTopBarToggled = action.payload;
    },
    setBranches: (state, action) => {
      state.branches = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { 
  setIsTopbarToggled,
  setBranches
 } = appSlice.actions;

export default appSlice.reducer;
