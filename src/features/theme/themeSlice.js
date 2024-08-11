import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "colorTheme",
    initialState: {
        bg_color: "#FFFFFF",
        font_color:"#000000"
    },
    reducers: {
        day: (state) => {
            state.bg_color = '#FFFFFF'
            state.font_color = '#000000'
        },
        night: (state) => {
            state.bg_color = '#000000'
            state.font_color = '#FFFFFF'
        },
    },
})

export const {day, night} = themeSlice.actions
export default themeSlice.reducer