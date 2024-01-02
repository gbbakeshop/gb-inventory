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
    recipeForm:{},
    recipeListForm:{
      id:'',
      name:'',
      target:0
    },
    selecta:[],
    filteredSelecta:[],
    accounts:[],
    filteredAccounts:[]
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
    setRecipeForm:(state, action)=>{
      state.recipeForm= action.payload;
    },
    setRecipeListForm:(state, action)=>{
      state.recipeListForm= action.payload;
    },
    
    setSelecta:(state, action)=>{
      state.selecta =  action.payload;
      state.filteredSelecta =  action.payload;
    },
    setFilteredSelecta:(state, action)=>{
      state.filteredSelecta =  action.payload;
    },
    setAccounts:(state, action)=>{
      state.accounts =  action.payload;
      state.filteredAccounts =  action.payload;
    },
    setFilteredAccounts:(state, action)=>{
      state.accounts =  action.payload;
      state.filteredAccounts =  action.payload;
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
  setFilteredRawMaterialsGroup,
  setRecipeForm,
  setRecipeList,
  setRecipeListForm,
  setSelecta,
  setFilteredSelecta,
  setAccounts,
  setFilteredAccounts
 } = controlsSlice.actions;

export default controlsSlice.reducer;
