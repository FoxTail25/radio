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
        favoriteFilter: (state, action) => {

            state.all_radioStation = state.all_radioStation.filter(e => {
                (action.payload).includes(e.name)

            })
        },
        resetFilter: (state) => { state.all_radioStation = radioStation }
    },
})

export const { userSelected, favoriteFilter, resetFilter } = stationSlice.actions
export default stationSlice.reducer