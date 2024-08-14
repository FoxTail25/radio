import { useDispatch } from 'react-redux'
import radioStation from '../data/station.js'
import { userSelected } from '../features/station/stationSlice'



export default function SelectStation_btn({name, img}) {

	console.log('name', name)
	console.log('img', img)

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