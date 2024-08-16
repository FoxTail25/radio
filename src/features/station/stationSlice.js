import { createSlice } from "@reduxjs/toolkit";
import radioStation from '../../data/station.js';

export const stationSlice = createSlice({
    name: 'selectedStation',
    initialState: {
        user_selected_station: '',
        all_radioStation: radioStation,
    },
    reducers: {
        userSelected: (state, action) => { state.user_selected_station = action.payload },
    },
})

export const { userSelected } = stationSlice.actions
export default stationSlice.reducer