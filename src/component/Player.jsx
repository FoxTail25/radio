

export const Player = ({ selectedStation }) => {

    if (selectedStation) {
        selectedStation = selectedStation[0]
        console.log(selectedStation.radioDot.dot_1.href)
    }else {
        console.log("радиостанция не выбрана")
    }


    return <>
        <div>Player</div>
        {
            selectedStation
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