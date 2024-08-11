

export const Player = ({ selectedStation }) => {

    if (selectedStation) {
        selectedStation = selectedStation[0]
        console.log(selectedStation.name)
    }else {
        console.log("радиостанция не выбрана")
    }
    return <>
        <div>Player</div>
        {
            selectedStation
                ?
                <div>
                {selectedStation.name}
                <audio  controls src={selectedStation.href}></audio>
                </div>
                :
<div>Радиостанция не выбрана</div>
}
    </>
}