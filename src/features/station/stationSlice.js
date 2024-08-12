import { createSlice } from "@reduxjs/toolkit";

export const stationSlice = createSlice({
    name: 'selectedStation',
    initialState: {
        station: ''
    },
    reducers: {
        userSelected: (state, action) => { state.station = action.payload },
    },
})

export const { userSelected } = stationSlice.actions
export default stationSlice.reducer