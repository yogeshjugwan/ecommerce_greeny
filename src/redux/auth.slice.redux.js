const { createSlice } = require("@reduxjs/toolkit")

const authSlice = createSlice({
    name: "auth",
    initialState: {
           isLoggedIn: null 
        // user: null
    },
    reducers: {
        login(state, action) {
            // state.isLoggedIn = true
            state.isLoggedIn = action.payload
        },
        logOut(state) {
            // state.isLoggedIn = false
            state.isLoggedIn = null
        }
    }
})

export const authAction = authSlice.actions;
export const selectUser = (state)=>state.isLoggedIn.isLoggedIn
export default authSlice