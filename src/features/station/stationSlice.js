import { createSlice } from "@reduxjs/toolkit";
import radioStation from '../../data/station.js';
import localDataWork from "../../utils/localStor.js";

let favorit = localDataWork.getFavoriteArr()
radioStation.forEach(e => {
    if (favorit.includes(e.name))
        e.favorites = true
})

export const stationSlice = createSlice({
    name: 'selectedStation',
    initialState: {
        user_selected_station: '',
        all_radioStation: radioStation
    },
    reducers: {
        userSelected: (state, action) => { state.user_selected_station = action.payload },

        favoriteFilter: (state, action) => {
            state.all_radioStation = state.all_radioStation.filter(e =>
                (action.payload).includes(e.name)
            )
        },
        findFilter: (state, action) => {
            if(action.payload === '') {
                // console.log('pusto')
                state.all_radioStation = radioStation
            } else {
                // let findedArr = [...radioStation].filter((e) => ({...e}.name).toLowerCase().includes((action.payload).toLowerCase()));
                // state.all_radioStation = findedArr;
                let findedArr = [...state.all_radioStation].filter((e) => ({...e}.name).toLowerCase().includes((action.payload).toLowerCase()));
                state.all_radioStation = findedArr;

            }
        },
        resetFilter: (state) => { 
            let favorit = localDataWork.getFavoriteArr()
            let temp = [...radioStation].map(e => {
                if(favorit.includes(e.name)) {    
                    return { ...e, favorites: true} 
                }
                return { ...e, favorites: false} 
            })
            // console.log('final', temp)
            state.all_radioStation = [...temp];
        },

        addFavoritStation: (state) => {
            state.user_selected_station.favorites = true; //Добавляем текущей станции признак избранной
            let all_st = state.all_radioStation.length === radioStation.length
            // let all_st = state.all_radioStation.some(e => e.name === state.user_selected_station.name); // проверяем есть ли в текущем списке станций добавляемая станция (если текущей нет, то это полный список.)
            if (all_st) {
                //Если станция есть в текущем списке, то перебираем список и добавляем ей признак избранной
                state.all_radioStation = state.all_radioStation.map(e => {
                    if (e.name === state.user_selected_station.name) {
                        e.favorites = true
                    }
                    return e
                })
            } else {
                //Если станции нет в текущем списке, то добавляем её.
                state.all_radioStation.push(state.user_selected_station)
            }
        },
        removeFavoritStation: (state) => {
            state.user_selected_station.favorites = false; //Удаляем у текущей станции признак избранной

            let all_st = state.all_radioStation.length === radioStation.length
            // console.log(all_st)
            if (all_st) {
                // Если у нас открыт список всех станций, то просто убираем у станции в этом списке признак избранной
                state.all_radioStation = state.all_radioStation.map(e => {
                    if (e.name === state.user_selected_station.name) {
                        e.favorites = false
                    }
                    return e
                })
            } else {
                // Если у нас открыт список избранных станций, то вычисляем индекс текуцей станции и....
                let i;
                (state.all_radioStation).forEach((el, ind) => {
                    if (el.name === state.user_selected_station.name) {
                        i = ind
                    }
                })
                //...и убираем её из списка избранных станций.
                state.all_radioStation = state.all_radioStation.filter((el, ind) => ind !== i)
            }
        }
    },
})

export const { userSelected, favoriteFilter, findFilter, resetFilter, addFavoritStation, removeFavoritStation } = stationSlice.actions
export default stationSlice.reducer