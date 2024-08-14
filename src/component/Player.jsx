import { useSelector } from 'react-redux'


export const Player = () => {

    const selectedStation = useSelector((state) => state.station.station)


    return <>
        <div>Player</div>
        {
            selectedStation !== ''
                ?
                <div>
                    <div>
                        {selectedStation.name}
                    </div>
                    <audio autoPlay controls preload='none' src={selectedStation.radioDot.dot_1.href}></audio>
                </div>
                :
                <div>Радиостанция не выбрана</div>
        }
    </>
}