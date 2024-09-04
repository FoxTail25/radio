import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { play, stop } from "../features/player/playerSlice"

export default function Audio() {

    const play_state = useSelector((state)=> state.play)
    const dispatch = useDispatch()

    const audio = useRef()

    console.log('play_state', play_state.play_pause_state)
    // console.log('href', play_state.href_state)

    if(play_state.play_pause_state === 'play') {
        audio.current.play()
    }

    if(audio.current && play_state.play_pause_state === 'stop') {
        audio.current.pause()
        // console.log('stop', audio.current)
    }

    return <audio
    ref={audio}
    src={play_state.href_state}
    // preload='auto'
    onPause={
        () => dispatch(stop())
    }
    onPlay={
        () => dispatch(play())
    }
    onCanPlay={
        () => {
            console.log('onCanPlay то что нужно!!! сигнализирует о возможности играть трек');
    //         setBuffer('играет')
    //         audio.current.play()
            // dispatch(play())
        }
    }
    // //----------------------------------------------
    // // onProgress={() => console.log('onProgress')}
    // // onSuspend={() => console.log('onSuspend')}
    // //-----------------------------------------------
    // onStalled={
    //     () => {
    //         // console.log('onStalled'); 
    //         // reset()
    //     }
    // }
    // onWaiting={
    //     () => {
    //         // console.log('onWaiting');
    //         // reset() 
    //     }
    // }
></audio>
}