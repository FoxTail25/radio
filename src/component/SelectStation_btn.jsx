import { useDispatch, useSelector } from 'react-redux'
import { userSelected } from '../features/station/stationSlice'
import { play, stop } from '../features/player/playerSlice'



export default function SelectStationBtn({ name, img, favorites }) {

	const radioStation = useSelector((state) => state.radio_station.all_radioStation)

	const selected_station = useSelector((state) => state.radio_station.user_selected_station)

	const dispatch = useDispatch()

	function filteredRadioStation(name) {

		// if (selected_station.name !== name) {
		let userSelectedStation = [...radioStation].filter(e => e.name === name)[0]

		// dispatch(stop())

		setTimeout(()=> dispatch(userSelected("")), 1)
		setTimeout(()=>	dispatch(userSelected(userSelectedStation)), 2)
		setTimeout(() => dispatch(play()), 3)
		// }
	}

	return <div className='radiostation_btn'>
		<button
			onClick={
				() => filteredRadioStation(name)
			}
		>
			<img src={img} alt='station_logo' className='radiostation_logo' />
			{
				favorites
					? <img src='img/player/favorite.svg' alt='station_logo' className='favorite_icon' />
					: ''
			}
		</button>
		<div className='station_name'>
			{name}
		</div>
	</div>
}