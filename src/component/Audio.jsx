import { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { stop, play } from '../features/player/playerSlice'

export default function Audio() {

    const play_state = useSelector((state)=> state.play)

    let station_href = play_state.href_state
    let play_s = play_state.play_pause_state

    const dispatch = useDispatch()

    const audio = useRef()

    console.log('play_state', play_s)

    if(play_s === "play" && audio.current) {
        audio.current.play()
    }
    if(play_s === "stop" && audio.current) {
        console.dir(audio.current)
        audio.current.pause()
    }




    return <audio
    ref={audio}
    src={station_href}
    // preload='auto'
    onPause={
        () => {
            // dispatch(stop())

        }
    }
    
    onCanPlay={
        () => {
            console.log('onCanPlay то что нужно!!! сигнализирует о возможности играть трек');
            dispatch(play())
        }
    }
    // //----------------------------------------------
    onProgress={() => console.log('onProgress')}
    onSuspend={() => {

        console.log('onSuspend')
    }
    }
    // //-----------------------------------------------
    onStalled={
        () => {
            console.log('onStalled'); 
        }
    }
    onWaiting={()=> {
        console.log('onWaiting')
    }}
></audio>
}