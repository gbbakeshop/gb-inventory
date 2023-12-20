import { createSlice } from '@reduxjs/toolkit';

export const productionSlice = createSlice({
  name: 'production',
  initialState: {
    bakersData:[],
    filteredBakersData:[],
    breadData:[],
    filteredBreadData:[],
    salesData:[],
    filteredSalesData:[],
  },
  reducers: {
   
    setBakersData:(state, action)=>{
      state.bakersData= action.payload;
      state.filteredBakersData= action.payload;
    },
    filteredBakersData:(state, action)=>{
      state.filteredBakersData= action.payload;
    },
    setBreadData:(state, action)=>{
      state.breadData= action.payload;
      state.filteredBreadData= action.payload;
    },
    filteredBreadData:(state, action)=>{
      state.filteredBreadData= action.payload;
    },

    setSalesData:(state, action)=>{
      state.salesData= action.payload;
      state.filteredSalesData= action.payload;
    },
    filteredSalesData:(state, action)=>{
      state.filteredSalesData= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { 
  setBakersData,
  filteredBakersData,
  setBreadData,
  filteredBreadData,
  setSalesData,
  filteredSalesData
 } = productionSlice.actions;

export default productionSlice.reducer;
