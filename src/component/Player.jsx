import { useLayoutEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import localDataWork from '../utils/localStor'

const title = document.querySelector('title')

export const Player = () => {

    let selectedStation = useSelector((state) => state.radio_station.user_selected_station)

    let audio = useRef()
    let [buffer, setBuffer] = useState('загружается')

    let [wait, setWait] = useState(true)

    useLayoutEffect(() => {
        if (audio.current) {

            title.innerText = `радио ${selectedStation.name}`

            setBuffer('загружается')

        }
    }, [selectedStation, wait])



    function reset() {
        selectedStation = ''
        setWait(!wait)
        console.log('reset', wait)
    }
    function playStop() {
        if (buffer == "играет") {
            audio.current.pause()
        } else {
            audio.current.play()
        }
    }
    function favorit(e){
        let flag = e.target.innerText === "добавить в избранное"
        if(flag) {
            console.log("добавить", selectedStation.name)
            localDataWork.addItemToFavoriteArr(selectedStation.name)
        } else {
            console.log("удалить")
            localDataWork.removeItemFromFavoriteArr(selectedStation.name)
        }
    }


    return <div className='player'>Player
        {
            selectedStation !== ''
                ?
                <div>
                    <div>
                        {buffer} радио {selectedStation.name}
                    </div>
                    <audio
                        ref={audio}
                        // controls
                        src={selectedStation.radioDot.dot_1.href}
                        preload='auto'

                        onPause={
                            () => setBuffer('выбрано')
                        }
                        onPlay={
                            () => setBuffer('играет')
                        }

                        onCanPlay={
                            () => {
                                console.log('onCanPlay то что нужно!!! сигнализирует о возможности играть трек');
                                setBuffer('играет')
                                audio.current.play()
                            }
                        }
                        //----------------------------------------------
                        onProgress={() => console.log('onProgress')}
                        onSuspend={() => console.log('onSuspend')}
                        //-----------------------------------------------
                        onStalled={
                            () => {
                                console.log('onStalled'); 
                                // reset()
                            }
                        }

                        onWaiting={
                            () => {
                                console.log('onWaiting');
                                // reset() 
                            }
                        }
                    ></audio>
                    <button className='playStop_btn'

                        onClick={() => playStop()}
                    >
                        <img src={
                            buffer == 'играет'
                                ? '/img/player/pause_btn.svg'
                                : '/img/player/play_btn.svg'
                        }
                            width={30}
                            height={30}
                        />
                    </button>
                    <div className='favorite'>
                        <button
                        onClick={(e) => favorit(e)}>
                            {
                                selectedStation.favorite
                                    ? "удалить из избранного"
                                    : "добавить в избранное"
                            }
                        </button>
                    </div>
                </div>
                :
                <div>Радиостанция не выбрана</div>
        }
    </div>
}