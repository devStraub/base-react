import { createSlice } from '@reduxjs/toolkit'

import About from '../../../../components/pages/about'

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        value: <About/>
    },
    reducers: {
        setPage: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setPage } = pageSlice.actions

export default pageSlice.reducer