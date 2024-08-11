import React from 'react'

export default function SelectStation({ radioStation, setSelectedStation }) {

    let allName = radioStation.map(e => e.name)

    function filteredRadioStation(name) {
        let userSelectedStation = radioStation.filter(e => e.name === name)
        setSelectedStation(userSelectedStation)
    }

    return <>
        SelectStation
        {
            allName.map(e =>
                <div key={e}>
                    <button onClick={() => filteredRadioStation(e)}>{e}</button>
                </div>)
        }
    </>

}