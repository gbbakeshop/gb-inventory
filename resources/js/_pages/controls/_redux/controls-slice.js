import { createSlice } from '@reduxjs/toolkit';

export const controlsSlice = createSlice({
  name: 'controls',
  initialState: {
    stepperValue: 1, 
    breadGroup:[],
    filteredBreadGroup:[],
    breads:[],
    filteredBreads:[],
    rawMaterials:[],
    filteredRawMaterials:[],
    rawMaterialsGroup:[],
    filteredRawMaterialsGroup:[],
  },
  reducers: {
    setStepperValue: (state, action) => {
      state.stepperValue = action.payload;
    },
    //
    setBreads: (state, action) => {
      state.breads = action.payload;
      state.filteredBreads = action.payload;
    },
    setFilteredBreads: (state, action) => {
      state.filteredBreads = action.payload;
    },
    //
    setBreadGroup: (state, action) => {
      state.breadGroup = action.payload;
      state.filteredBreadGroup = action.payload;
    },
    setFilteredBreadGroup: (state, action) => {
      state.filteredBreadGroup = action.payload;
    },
    //
    setRawMaterials: (state, action) => {
      state.rawMaterials = action.payload;
      state.filteredRawMaterials = action.payload;
    },
    setFilteredRawMaterials: (state, action) => {
      state.filteredRawMaterials = action.payload;
    },
    //
    setRawMaterialsGroup: (state, action) => {
      state.rawMaterialsGroup = action.payload;
      state.filteredRawMaterialsGroup = action.payload;
    },

    setFilteredRawMaterialsGroup: (state, action) => {
      state.filteredRawMaterialsGroup = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { 
  setStepperValue,
  setBreads,
  setFilteredBreads,
  setBreadGroup,
  setFilteredBreadGroup,
  setRawMaterials,
  setFilteredRawMaterials,
  setRawMaterialsGroup,
  setFilteredRawMaterialsGroup
 } = controlsSlice.actions;

export default controlsSlice.reducer;
