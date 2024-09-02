import { useDispatch, useSelector } from 'react-redux'
import { userSelected } from '../features/station/stationSlice'
import { stop } from '../features/player/playerSlice'



export default function SelectStationBtn({ name, img, favorites }) {

	const radioStation = useSelector((state) => state.radio_station.all_radioStation)

	const dispatch = useDispatch()

	function filteredRadioStation(name) {
		let userSelectedStation = [...radioStation].filter(e => e.name === name)[0]
		dispatch(stop())
		dispatch(userSelected(userSelectedStation))
	}

	console.log(favorites)
	return <div className='radiostation_btn'>
		<button
			onClick={
				() => filteredRadioStation(name)
			}
		>
			<img src={img} alt='station_logo'  className='radiostation_logo'/>
			{
				favorites
					? <img src='img/player/favorite.svg' alt='station_logo' className='favorite_icon' />
					: ''
			}
		</button>
		<div>
			{name}
		</div>
	</div>
}