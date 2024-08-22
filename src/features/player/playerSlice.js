import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: 'playerSlice',
    initialState: {
        play_pause_state: 'stop'
    },
    reducers:{
        play:((state)=>{state.play_pause_state = 'play'}),
        stop:((state)=>{state.play_pause_state = 'stop'}),
    },
})

export const {play, pause} = playerSlice.actions
export default playerSlice.reducer