import { createSlice } from "@reduxjs/toolkit";

export const productionSlice = createSlice({
    name: "branch_selecta",
    initialState: {
        branchSelecta: [],
        filteredBranchSelecta: [],
        doubleCheckSelecta: [],
        selectedSelecta: [],
        selectaSalesReport: [],
        filteredSelectaSalesReport: [],
    },
    reducers: {
        setBranchSelecta: (state, action) => {
            state.branchSelecta = action.payload;
            state.filteredBranchSelecta = action.payload;
        },
        setFilteredBranchSelecta: (state, action) => {
            state.filteredBranchSelecta = action.payload;
        },
        setSelectedSelecta: (state, action) => {
            return {
                ...state,
                selectedSelecta: [...state.selectedSelecta, action.payload],
            };
        },
        setSelectedSelectaReset: (state, action) => {
            state.selectedSelecta = action.payload;
        },
        setSelectedSelectaEdit: (state, action) => {
            state.selectedSelecta = action.payload;
        },
        setSelectaSalesReport: (state, action) => {
            state.selectaSalesReport = action.payload;
            state.filteredSelectaSalesReport = action.payload;
        },
        setFilteredSelectaSalesReport: (state, action) => {
            state.filteredSelectaSalesReport = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setBranchSelecta,
    setFilteredBranchSelecta,
    setSelectedSelecta,
    setSelectedSelectaEdit,
    setSelectedSelectaReset,
    setSelectaSalesReport,
    setFilteredSelectaSalesReport
} = productionSlice.actions;

export default productionSlice.reducer;
