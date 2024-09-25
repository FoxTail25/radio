import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: 'playerSlice',
    initialState: {
        play_pause_state: 'stop',
        href_state: '',
    },
    reducers: {
        play: (state) => { state.play_pause_state = 'play' },
        stop: (state) => { state.play_pause_state = 'stop' },
        setHref:(state, actions) => {state.href_state = actions.payload},
        resetHref:(state) => {state.href_state = ''},
    },
})

export const { play, stop, setHref, resetHref } = playerSlice.actions
export default playerSlice.reducer