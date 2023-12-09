import { createSlice } from '@reduxjs/toolkit';

export const controlsSlice = createSlice({
  name: 'controls',
  initialState: {
    stepperValue: 1, // Change this line to use a string or another appropriate data type
  },
  reducers: {
    setStepperValue: (state, action) => {
      state.stepperValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStepperValue } = controlsSlice.actions;

export default controlsSlice.reducer;
