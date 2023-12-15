import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isTopBarToggled: true,
    branches:[],
    toastStatus:{
      status:'waiting',
      message:''
    },
    recipes:[],
    recipeList:[],
    filteredRecipeList:[]
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
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setRecipeList:(state, action)=>{
      state.recipeList = action.payload;
      state.filteredRecipeList =  action.payload;
    },
    setFilteredRecipeList:(state, action)=>{
      state.filteredRecipeList =  action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { 
  setIsTopbarToggled,
  setBranches,
  setToastStatus,
  setRecipes,
  setRecipeList,
  setFilteredRecipeList
 } = appSlice.actions;

export default appSlice.reducer;
