import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import localDataWork from '../utils/localStor'
import { addFavoritStation, removeFavoritStation } from '../features/station/stationSlice'
import Audio from './Audio'
import { stop, play, setHref } from '../features/player/playerSlice'
import radioStation from '../data/station'

const title = document.querySelector('title')

export const Player = () => {

    const selectedStation = useSelector((state) => state.radio_station.user_selected_station)
    const play_state = useSelector((state) => state.play.play_pause_state)
    const dispatch = useDispatch()
    
    

    let href;
    if (selectedStation) {
        href = selectedStation?.radioDot.dot_1.href
    }

useEffect(()=>{
    dispatch(setHref(href))
    
},[selectedStation])

    // let audio = useRef()
    let [buffer, setBuffer] = useState('загружается')



    function playStop() {
        if (play_state !== "play") {
            // audio.current.pause()
            console.log(play_state)
            dispatch(play())
        } else {
            dispatch(stop())
            // audio.current.play()
        }
    }
    function favorit(e) {
        let flag = e.target.innerText === "добавить в избранное"
        if (flag) {
            localDataWork.addItemToFavoriteArr(selectedStation.name)
            dispatch(addFavoritStation())
        } else {
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
                        {/* {buffer}  */}
                        радио {selectedStation.name}
                    </div>


                    <button className='playStop_btn'
                        onClick={() => playStop()}
                    >
                        <img src={
                            play_state !== 'stop'
                                ? './img/player/pause_btn.svg'
                                : './img/player/play_btn.svg'
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
                            className='favorite__btn favorite__btn_addDel'
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
        {
         selectedStation && <Audio />
        }
     
    </div>
}