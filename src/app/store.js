import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/theme/themeSlice';
import langReducer from '../features/lang/langSlice';
import stationReducer from '../features/station/stationSlice';
import playerReducer from '../features/player/playerSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        lang: langReducer,
        radio_station: stationReducer,
        play: playerReducer
    }
})