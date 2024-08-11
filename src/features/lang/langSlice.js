import { createSlice } from "@reduxjs/toolkit";

export const langSlice = createSlice({
    name: "language",
    initialState:{
        lang: 'Rus'
    },
    reducers: {
        english: (state) => {state.lang = 'en'},
        russian: (state) => {state.lang = 'rus'},
    },
})

export const {english, russian} = langSlice.actions
export default langSlice.reducer