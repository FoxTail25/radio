import React, { useEffect, useState } from 'react'
import SelectStationBtn from './SelectStation_btn'
import { useDispatch, useSelector } from 'react-redux';
import localDataWork from '../utils/localStor';
import { favoriteFilter, findFilter, resetFilter } from '../features/station/stationSlice';


export default function SelectStation() {

    let radioStation = useSelector((state) => state.radio_station.all_radioStation)
    let allName = radioStation.map(e => { return { name: e.name, img: e.img, favorites: e.favorites } })
    const dispatch = useDispatch()

    let [find, setFind] = useState('')


    let favoriteArr = localDataWork.getFavoriteArr()

    function findStation(e) {
        setFind(e.target.value)
    }
    
    useEffect(() => {
        dispatch(findFilter(find))
    },[find])


    return <div className='ss_container'>
        <div className='station_sort'>
            <h2>
                Интернет радиостанции
            </h2>
            <div className='select_btn_container'>
                <button
                    className='favorite__btn'
                    onClick={() => dispatch(resetFilter())}>
                    все
                </button>
                <button
                    className='favorite__btn'
                    onClick={() => dispatch(favoriteFilter(favoriteArr))}>
                    избранные
                </button>
            </div>
            <input className='finder' type='search' value={find} onChange={(e)=> findStation(e)}/>
        </div>
        <div className='radioStation_btn_container'>
            {
                allName.map(e => <SelectStationBtn key={e.name} {...e} />)
            }
        </div>
    </div>
}