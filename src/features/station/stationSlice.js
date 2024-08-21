import { createSlice } from "@reduxjs/toolkit";
import radioStation from '../../data/station.js';
import localDataWork from "../../utils/localStor.js";

// radioStation.forEach(e => {
//     let favorit = localDataWork.getFavoriteArr()
//     if (favorit.includes(e.name))
//         e.favorites = true
// })

export const stationSlice = createSlice({
    name: 'selectedStation',
    initialState: {
        user_selected_station: '',
        all_radioStation: radioStation.map(e => {
            let favorit = localDataWork.getFavoriteArr()
            if (favorit.includes(e.name)) {

                e.favorites = true
            }
            return e
        }),
    },
    reducers: {
        userSelected: (state, action) => { state.user_selected_station = action.payload },

        favoriteFilter: (state) => {
            state.all_radioStation = state.all_radioStation.filter(e =>
                e.favorites === true
            )
        },
        // favoriteFilter: (state, action) => {
        //     state.all_radioStation = state.all_radioStation.filter(e =>
        //         (action.payload).includes(e.name)
        //     )
        // },
        resetFilter: (state) => { state.all_radioStation = radioStation },

        addFavoritStation: (state) => {
            state.user_selected_station.favorites = true;
            state.all_radioStation = state.all_radioStation.map(e => {
                if (e.name === state.user_selected_station.name) {
                    e.favorites = true
                }
                return e
            })
        },
        removeFavoritStation: (state) => {
            state.user_selected_station.favorites = false;
            state.all_radioStation = state.all_radioStation.map(e => {
                if (e.name === state.user_selected_station.name) {
                    e.favorites = true
                }
                return e
            })
        }
    },
})

export const { userSelected, favoriteFilter, resetFilter, addFavoritStation, removeFavoritStation } = stationSlice.actions
export default stationSlice.reducer