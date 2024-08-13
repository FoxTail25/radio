import { useSelector } from 'react-redux'


export const Player = () => {

    const selectedStation = useSelector((state) => state.station.station)

    // if (selectedStation !== '') {
    //     console.log(selectedStation.radioDot.dot_1.href)
    // } else {
    //     console.log("радиостанция не выбрана")
    // }

    // console.log('in_store', selectedStation)


    return <>
        <div>Player</div>
        {
            selectedStation !== ''
                ?
                <div>
                    <div>
                        {selectedStation.name}
                    </div>
                    <audio autoPlay controls src={selectedStation.radioDot.dot_1.href}></audio>
                </div>
                :
                <div>Радиостанция не выбрана</div>
        }
    </>
}