import { createSlice } from "@reduxjs/toolkit";

export const expensesSlice = createSlice({
    name: "branch_expenses",
    initialState: {
        credits: [],
        filteredCredits: [],
        charge: [],
        filteredCharge: [],
        expenses: [],
        filteredExpenses: [],
    },
    reducers: {
        setCredits: (state, action) => {
            state.credits = action.payload;
            state.filteredCredits = action.payload;
        },
        setfilteredCredits: (state, action) => {
            state.filteredCredits = action.payload;
        },
        setCharge: (state, action) => {
            state.charge = action.payload;
            state.filteredCharge = action.payload;
        },
        setfilteredCharge: (state, action) => {
            state.filteredCharge = action.payload;
        },
        setExpenses: (state, action) => {
            state.expenses = action.payload;
            state.filteredExpenses = action.payload;
        },
        setfilteredExpenses: (state, action) => {
            state.filteredExpenses = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { 
  setCredits, 
  setfilteredCredits,
  setCharge,
  setfilteredCharge,
  setExpenses,
  setfilteredExpenses } = expensesSlice.actions;

export default expensesSlice.reducer;
