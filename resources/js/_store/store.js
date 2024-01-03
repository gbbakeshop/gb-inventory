import { configureStore } from '@reduxjs/toolkit'
import appSlice from '@/_redux/app-slice'
import controlsSlice from '@/_pages/controls/_redux/controls-slice'
import productionSlice from '@/_pages/branches/production/_redux/production-slice'
import branchSelectaSlice from '@/_pages/branches/selecta/_redux/branch-selecta-slice'
import expensesSlice from '@/_pages/branches/expenses/_redux/expenses-slice'
import rawMaterialsSlice from '@/_pages/branches/raw_materials/_redux/raw-materials-slice'
export default configureStore({
  reducer: {
    app: appSlice,
    controls:controlsSlice,
    production:productionSlice,
    selecta:branchSelectaSlice,
    expenses:expensesSlice,
    raw_materials:rawMaterialsSlice
  },
})