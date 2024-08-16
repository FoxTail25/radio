import React from 'react'
import SelectStation_btn from './SelectStation_btn'
import { useSelector } from 'react-redux';


export default function SelectStation() {

    let radioStation = useSelector((state) => state.radio_station.all_radioStation)
    let allName = radioStation.map(e => { return { name: e.name, img: e.img } })

    return <div className='ss_container'>
        {/* <h2>
            Select internet radio station
        </h2> */}
        <div className='radioStation_btn_container'>
            {
                allName.map(e => <SelectStation_btn key={e.name} {...e}/>)
            }
        </div>
    </div>
}