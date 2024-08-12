import React from 'react'
import b from '../css/selectStation.css'
import { useDispatch } from 'react-redux'
import { userSelected } from '../features/station/stationSlice'
export default function SelectStation({ radioStation }) {

    let allName = radioStation.map(e => e.name)

    const dispatch = useDispatch()

    function filteredRadioStation(name) {
        let userSelectedStation = radioStation.filter(e => e.name === name)[0]
        dispatch(userSelected(userSelectedStation))
    }

    return <>
        <h2>
            SelectStation
        </h2>
        {
            allName.map(e =>
                <div key={e}>
                    <button
                        onClick={
                            () => filteredRadioStation(e)
                        }
                    >{e}
                    </button>
                </div>)
        }
    </>

}