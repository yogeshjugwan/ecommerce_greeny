import { createSlice } from '@reduxjs/toolkit'
const navSlice = createSlice({
    name: 'navbar',
    initialState: { sideNav: false },
    reducers: {
        sideNavShow(state) {
            state.sideNav = true
        },
        sideNavHide(state) {
            state.sideNav = false
        }
    }
})
export const navActions = navSlice.actions;
export default navSlice;
