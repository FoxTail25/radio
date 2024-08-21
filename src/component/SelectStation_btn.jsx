import { useDispatch, useSelector } from 'react-redux'
import { userSelected } from '../features/station/stationSlice'



export default function SelectStationBtn({name, img}) {

	const radioStation = useSelector((state) => state.radio_station.all_radioStation)

	const dispatch = useDispatch()

	function filteredRadioStation(name) {
		let userSelectedStation = [...radioStation].filter(e => e.name === name)[0]
		dispatch(userSelected(userSelectedStation))
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