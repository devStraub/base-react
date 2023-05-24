import { configureStore } from '@reduxjs/toolkit'

// Reducers
import pageReducer from '../reducers/components/pages'

import rightSidebarReducer from '../reducers/components/overlays/sidebar/right'
import leftSidebarReducer  from '../reducers/components/overlays/sidebar/left'
import modalReducer from '../reducers/components/overlays/dialog/modal'
import dialogConfirmReducer from '../reducers/components/overlays/dialog/confirm'

export default configureStore({
  reducer: {
    pageView: pageReducer,
    rightSidebarView: rightSidebarReducer,
    leftSidebarView: leftSidebarReducer,
    modalView: modalReducer,
    dialogConfirmView: dialogConfirmReducer
  }
})