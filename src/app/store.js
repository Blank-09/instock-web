import { configureStore } from '@reduxjs/toolkit'
import uiReducer from '../features/ui/uiSlice'

export default configureStore({
  reducer: {
    ui: uiReducer,
  },
})
