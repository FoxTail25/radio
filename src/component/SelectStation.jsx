import React from 'react'
import SelectStationBtn from './SelectStation_btn'
import { useDispatch, useSelector } from 'react-redux';
import localDataWork from '../utils/localStor';
import { favoriteFilter, resetFilter } from '../features/station/stationSlice';


export default function SelectStation() {

    let radioStation = useSelector((state) => state.radio_station.all_radioStation)
    let allName = radioStation.map(e => { return { name: e.name, img: e.img } })
    const dispatch = useDispatch()

    console.log("радио станции", radioStation)
    
    let favoriteArr = localDataWork.getFavoriteArr()
    

    return <div className='ss_container'>
        <div className='station_sort'>
            <h2>
                Сортировка станций
            </h2>
            <div>
                <button
                onClick={() => dispatch(resetFilter())}
                >все</button>
                <button
                onClick={() => dispatch(favoriteFilter(favoriteArr))}
                >любимые</button>
                {/* <button>жанры</button> */}
            </div>
        </div>
        <div className='radioStation_btn_container'>
            {
                allName.map(e => <SelectStationBtn key={e.name} {...e} />)
            }
        </div>
    </div>
}