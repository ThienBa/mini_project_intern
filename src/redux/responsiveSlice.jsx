import { createSlice } from '@reduxjs/toolkit'

const responsiveSlice = createSlice({
    name: 'responsive',
    initialState: {
        sidebarShow: false,
    },
    reducers: {
        setSidebarShow: (state, action) => {
            state.sidebarShow = action.payload
        }
    }
})

export default responsiveSlice