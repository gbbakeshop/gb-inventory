import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isTopBarToggled: true,
    branches:[],
    toastStatus:{
      status:'waiting',
      message:''
    }
  },
  reducers: {
    setIsTopbarToggled: (state, action) => {
      state.isTopBarToggled = action.payload;
    },
    setBranches: (state, action) => {
      state.branches = action.payload;
    },
    setToastStatus: (state, action) => {
      state.toastStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { 
  setIsTopbarToggled,
  setBranches,
  setToastStatus
 } = appSlice.actions;

export default appSlice.reducer;
