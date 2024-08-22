import { useSelector } from "react-redux"

export default function Audio() {

    const play_state = useSelector((state)=> state.play.play_pause_state)

    console.log(play_state)

    return <audio
    // ref={audio}
    // src={selectedStation.radioDot.dot_1.href}
    // preload='auto'
    // onPause={
    //     () => setBuffer('выбрано')
    // }
    // onPlay={
    //     () => setBuffer('играет')
    // }
    // onCanPlay={
    //     () => {
    //         // console.log('onCanPlay то что нужно!!! сигнализирует о возможности играть трек');
    //         setBuffer('играет')
    //         audio.current.play()
    //     }
    // }
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