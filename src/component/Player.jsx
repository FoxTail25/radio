import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import localDataWork from '../utils/localStor'
import { addFavoritStation, removeFavoritStation } from '../features/station/stationSlice'
import Audio from './Audio'
import { play, setHref, stop } from '../features/player/playerSlice'


export const Player = () => {

    let selectedStation = useSelector((state) => state.radio_station.user_selected_station)
    let playPause_state = useSelector((state) => state.play.play_pause_state)
    const dispatch = useDispatch()


    useEffect(()=> {
        if(selectedStation) {
            dispatch(setHref(selectedStation.radioDot.dot_1.href))
        }
    })


    function playStop() {
    if(playPause_state === 'stop') {
            dispatch(play())
        } else {
            dispatch(stop())
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
                        радио {selectedStation.name}
                    </div>
                    {
                        selectedStation 
                        ? <Audio/>
                        : ''
                    }
                    
                    
                    <button className='playStop_btn'

                        onClick={() => playStop()}
                    >
                        <img src={
                            playPause_state !== 'stop'
                                ? './img/player/pause_btn.svg'
                                : './img/player/play_btn.svg'
                        }
                        width={30}
                            height={30}
                            alt={
                                playPause_state !== 'play'
                                ? 'pause'
                                : 'play'
                            }
                        />
                    </button>
                    <div className='favorite'>
                        <button
                            className={
                                selectedStation.favorites
                                    ? 'favorite__btn favorite__btn_del favorite__btn_addDel'
                                    : 'favorite__btn favorite__btn_add favorite__btn_addDel'
                            }
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