import { useDispatch, useSelector } from 'react-redux'
import { userSelected } from '../features/station/stationSlice'
import { play, stop } from '../features/player/playerSlice'



export default function SelectStationBtn({name, img}) {

	const radioStation = useSelector((state) => state.radio_station.all_radioStation)
	const userSelect = useSelector((state) => state.radio_station.user_selected_station)

	const dispatch = useDispatch()

	function filteredRadioStation(name) {
		if(name !== userSelect.name) {
			let userSelectedStation = [...radioStation].filter(e => e.name === name)[0]
			dispatch(stop())
			dispatch(userSelected(userSelectedStation))
		}
	}

	return <div>
		<button
			onClick={
				() => filteredRadioStation(name)
			}
		>
			<img src={img} alt='station_logo' />
		</button>
		<div>
			{name}
		</div>
	</div>
}