import { useLayoutEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const title = document.querySelector('title')

export const Player = () => {

    const selectedStation = useSelector((state) => state.radio_station.user_selected_station)

    let audio = useRef()

    let [wait, setWait] = useState(0)

    useLayoutEffect(() => {
        if (audio.current) {
            audio.current.pause()
            audio.current.play()
            title.innerText = `радио ${selectedStation.name}`

        }
    }, [selectedStation])

    function reset() {
        setWait(wait++)
    }

    console.log('reset')

    return <>
        <div>Player</div>
        {
            selectedStation !== ''
                ?
                <div>
                    <div>
                        Играет радио {selectedStation.name}
                    </div>
                    <audio
                        ref={audio}
                        controls
                        src={selectedStation.radioDot.dot_1.href}

                        // onPlaying={()=>console.log('onPlaying')}
                        onCanPlay={()=>console.log('onCanPlay то что нужно!!! сигнализирует о возможности играть трек')}
                        // onError={()=>console.log('Error')}
                        // onSeeking={()=>console.log('onSeeking')}
                        // onSeeked={()=>console.log('onSeeked')}
                        //----------------------------------------------
                        onProgress={()=>console.log('onProgress')}
                        onSuspend={()=>console.log('onSuspend')}
                        //-----------------------------------------------
                        // onStalled={()=>{console.log('onStalled'); reset()}}
                        onWaiting={()=>{console.log('onWaiting'); reset()}}
                    ></audio>
                </div>
                :
                <div>Радиостанция не выбрана</div>
        }
    </>
}