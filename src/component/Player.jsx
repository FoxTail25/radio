import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import localDataWork from '../utils/localStor'
import { addFavoritStation, favoriteFilter, removeFavoritStation } from '../features/station/stationSlice'

const title = document.querySelector('title')

export const Player = () => {

    let selectedStation = useSelector((state) => state.radio_station.user_selected_station)
    const dispatch = useDispatch()
    let favoriteArr = localDataWork.getFavoriteArr()


    let audio = useRef()
    let [buffer, setBuffer] = useState('загружается')


    useEffect(() => {
        if (audio.current) {

            title.innerText = `радио ${selectedStation.name}`

        }
    }, [selectedStation])



    function playStop() {
        if (buffer === "играет") {
            audio.current.pause()
        } else {
            audio.current.play()
        }
    }
    function favorit(e){
        let flag = e.target.innerText === "добавить в избранное"
        if(flag) {
            // console.log("добавить", selectedStation.name)
            localDataWork.addItemToFavoriteArr(selectedStation.name)
            dispatch(addFavoritStation())
        } else {
            // console.log("удалить", selectedStation.name)
            localDataWork.removeItemFromFavoriteArr(selectedStation.name)
            dispatch(removeFavoritStation())
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
                                // console.log('onCanPlay то что нужно!!! сигнализирует о возможности играть трек');
                                setBuffer('играет')
                                audio.current.play()
                            }
                        }
                        //----------------------------------------------
                        // onProgress={() => console.log('onProgress')}
                        // onSuspend={() => console.log('onSuspend')}
                        //-----------------------------------------------
                        onStalled={
                            () => {
                                // console.log('onStalled'); 
                                // reset()
                            }
                        }
                        onWaiting={
                            () => {
                                // console.log('onWaiting');
                                // reset() 
                            }
                        }
                    ></audio>
                    <button className='playStop_btn'

                        onClick={() => playStop()}
                    >
                        <img src={
                            buffer === 'играет'
                                ? '/img/player/pause_btn.svg'
                                : '/img/player/play_btn.svg'
                        }
                            width={30}
                            height={30}
                            alt={
                                buffer === 'играет'
                                ? 'pause'
                                : 'play'
                            }
                        />
                    </button>
                    <div className='favorite'>
                        <button
                        onClick={(e) => favorit(e)}>
                            {
                                selectedStation.favorites
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