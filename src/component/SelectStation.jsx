import React from 'react'
import SelectStation_btn from './SelectStation_btn'
import radioStation from '../data/station.js';


export default function SelectStation() {

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