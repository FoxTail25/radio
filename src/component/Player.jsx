import { useEffect, useLayoutEffect, useRef } from 'react'
import { useSelector } from 'react-redux'


export const Player = () => {

    const selectedStation = useSelector((state) => state.radio_station.user_selected_station)

    let audio = useRef()

    const title = document.querySelector('title')



    useLayoutEffect(() => {
        if (audio.current) {
            audio.current.play()
            title.innerText = `радио ${selectedStation.name}`

        }
    }, [selectedStation])


    return <>
        <div>Player</div>
        {
            selectedStation !== ''
                ?
                <div>
                    <div>
                        Играет радио {selectedStation.name}
                    </div>
                    <audio ref={audio} controls preload='metadata' src={selectedStation.radioDot.dot_1.href}></audio>
                </div>
                :
                <div>Радиостанция не выбрана</div>
        }
    </>
}