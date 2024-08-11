import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/theme/themeSlice';
import langReducer from '../features/lang/langSlice'
import statiomReducer from '../features/station/stationSlice'

export const store = configureStore({
    reducer:{
        theme: themeReducer,
        lang: langReducer,
        station: statiomReducer,
    }
})