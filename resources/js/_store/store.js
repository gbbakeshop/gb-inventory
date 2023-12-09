import { configureStore } from '@reduxjs/toolkit'
import appSlice from '@/_redux/app-slice'
import controlsSlice from '@/_pages/controls/_redux/controls-slice'

export default configureStore({
  reducer: {
    app: appSlice,
    controls:controlsSlice
  },
})