import { createSlice } from '@reduxjs/toolkit';

export const rawMaterialsSlice = createSlice({
  name: 'rawMaterials',
  initialState: {
    rawMaterials:[],
    filteredRawMaterials:[],
  },
  reducers: {
   
    setRawMaterials:(state, action)=>{
      state.rawMaterials= action.payload;
      state.filteredRawMaterials= action.payload;
    },
    setFilteredRawMaterials:(state, action)=>{
      state.filteredRawMaterials= action.payload;
    },
 
  },
});

// Action creators are generated for each case reducer function
export const { 
  setRawMaterials,
  setFilteredRawMaterials,
 } = rawMaterialsSlice.actions;

export default rawMaterialsSlice.reducer;
