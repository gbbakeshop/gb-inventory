import { createSlice } from '@reduxjs/toolkit';

export const productionSlice = createSlice({
  name: 'branch_selecta',
  initialState: {
    branchSelecta:[],
    filteredBranchSelecta:[],
    doubleCheckSelecta:[],
    selectedSelecta:[]
  },
  reducers: {
    setBranchSelecta:(state, action)=>{
      state.branchSelecta= action.payload;
      state.filteredBranchSelecta= action.payload;
    },
    setFilteredBranchSelecta:(state, action)=>{
      state.filteredBranchSelecta= action.payload;
    },
    setSelectedSelecta:(state, action)=>{
        return {
          ...state,
          selectedSelecta: [
            ...state.selectedSelecta,
            action.payload
          ]
        };
    },
    setSelectedSelectaEdit:(state, action)=>{
      state.selectedSelecta = action.payload
  },
  
  },
});

// Action creators are generated for each case reducer function
export const { 
  setBranchSelecta,
  setFilteredBranchSelecta,
  setSelectedSelecta,
  setSelectedSelectaEdit
 } = productionSlice.actions;

export default productionSlice.reducer;
