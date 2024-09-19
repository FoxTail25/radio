import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { play, stop } from "../features/player/playerSlice"
import { userSelected } from "../features/station/stationSlice"

export default function Audio() {

    const selectedStation = useSelector((state) => state.radio_station.user_selected_station)
    const play_state = useSelector((state)=> state.play)
    const dispatch = useDispatch()


    const audio = useRef()



    if(play_state.play_pause_state === 'play') {
        audio.current.play()
    }

    if(audio.current && play_state.play_pause_state === 'stop') {
        audio.current.pause()
    }

    return <audio
    ref={audio}
    src={play_state.href_state}
    onPause={
        () => dispatch(stop())
    }
    onPlay={
        () => dispatch(play())
    }
    onCanPlay={
        () => {
            // console.log('onCanPlay то что нужно!!! сигнализирует о возможности играть трек');
            dispatch(play())
        }
    }
    onError={
        (e)=> {
            console.log('ERROR', e)
        }
    }
    onErrorCapture={
        (e) => 
            {
                console.log('ErrCapture',e)
            }
    }
    onSuspend={() =>
        {
        //  console.log('onSuspend')
        }
    }
    onStalled={
        () => {
            // console.log('onStalled selectStation is:', selectedStation); 
            
            // // reset()
            // dispatch(stop())
            // dispatch(userSelected(''));
            // setTimeout(() => {dispatch(userSelected(selectedStation))}, 1000)
        }
    }
></audio>
}