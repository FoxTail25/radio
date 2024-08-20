
let favorit_arr;

const checkLocalStore = localStorage.getItem('favorite_radio_station')
if (checkLocalStore) {
	favorit_arr = [...checkLocalStore]
} else {
	favorit_arr = []
}

class localData {
	constructor(fav_arr) {
		this.fav_arr = fav_arr
	}
	parse(data) {
		return JSON.parse(data)
	}
	getFavoriteArr() {
		let localArr = this.parse(localStorage.getItem('favorite_radio_station'))
		return localArr == null
		? this.fav_arr
		: localArr
		
	}
	addItemToFavoriteArr(station) {
		let localStore = this.getFavoriteArr()
		let newLocalStore = [...localStore, station]
		localStorage.setItem('favorite_radio_station', JSON.stringify(newLocalStore))
		return this.getFavoriteArr()
	}
	removeItemFromFavoriteArr(station) {
		let localStore = this.getFavoriteArr()
		let newLocalStore = [...localStore].filter(e => e !== station)
		localStorage.setItem('favorite_radio_station', JSON.stringify(newLocalStore))
		return this.getFavoriteArr()
	}
}

const localDataWork = new localData(favorit_arr)

export default localDataWork