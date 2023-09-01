import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: "" || null,
    toggle: false
}

const GlobalState:any = createSlice({
    name: "globalState",
    initialState,
    reducers: {
        signInUser: (state: any, { payload }: any) => {
            state.user = payload
        },

        logOut: (state: any) => {
            state.user = null
        },

        changeToggleTrue: (state: any) => {
            state.toggle = true
        },
        changeToggleFalse: (state: any) => {
            state.toggle = false
        }
    }
});

export const { signInUser, logOut, changeToggleTrue, changeToggleFalse } = GlobalState.actions

export default GlobalState.reducer