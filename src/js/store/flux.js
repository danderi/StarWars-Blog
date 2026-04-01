const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],

			peopleDetails: [],
			peopleMain: [],
			isLoadingPeople: false,

			planetDetails: [],
			planetMain: [],
			isLoadingPlanet: false,

			vehicleDetails: [],
			vehicleMain: [],
			isLoadingVehicle: false,

			speciesDetails: [],
			speciesMain: [],
			isLoadingSpecies: false,

		},
		actions: {

			addToFavorites: (name) => {
				const store = getStore();
				let newFavorites = store.favorites;
				if (!newFavorites.includes(name)) {
					newFavorites.push(name);
				}
				setStore({ favorites: newFavorites, ...store })
			},

			refreshFavorites: (name) => {
				let store = getStore();
				let newestFavorites = store.favorites;
				let finalFavorites = newestFavorites.filter((item) => item !== name);
				setStore({ favorites: finalFavorites })
			},


			loadingPeopleMessage: () => {
				const store = getStore();
				setStore({ ...store, isLoadingPeople: true })
			},

			loadingPlanetMessage: () => {
				const store = getStore();
				setStore({ ...store, isLoadingPlanet: true })
			},

			loadingVehicleMessage: () => {
				const store = getStore();
				setStore({ ...store, isLoadingVehicle: true })
			},

			loadingSpeciesMessage: () => {
				const store = getStore();
				setStore({ ...store, isLoadingSpecies: true })
			},

			loadPeopleDetails: async (who) => {
				let peopleMainList = [];
				const store = getStore();

				let url = `https://www.swapi.tech/api/people/`;
				if (who == "next") url = store.peopleMain[0].next;
				if (who == "previous") url = store.peopleMain[0].previous;

				try {
					const response = await fetch(url);
					if (!response.ok) {
						throw new Error(`Network response from api/people was not ok`);
					}
					const data = await response.json();
					peopleMainList.push(data)

					console.log(data.next, data.previous)

					const promises = data.results.map(character =>
						fetch(character.url)
							.then(res => res.json())
							.catch(err => {
								console.error('Error fetching character:', character.name, err);
								return null;
							})
					);

					const peopleDetaillist = (await Promise.all(promises)).filter(item => item && item.message);
					setStore({ ...store, peopleDetails: peopleDetaillist, peopleMain: peopleMainList, isLoadingPeople: false })
				} catch (error) {
					console.error('Error fetching characters:', error)
				}
			},

			loadPlanetDetails: async (who) => {
				let planetMainList = [];
				const store = getStore();

				let url = `https://www.swapi.tech/api/planets/`;
				if (who == "next") url = store.planetMain[0].next;
				if (who == "previous") url = store.planetMain[0].previous;

				try {
					const response = await fetch(url);
					if (!response.ok) {
						throw new Error(`Network response from api/people was not ok`);
					}
					const data = await response.json();
					planetMainList.push(data)

					console.log(data.next, data.previous)

					const promises = data.results.map(planet =>
						fetch(planet.url)
							.then(res => res.json())
							.catch(err => {
								console.error('Error fetching planet:', planet.name, err);
								return null;
							})
					);

					const planetDetaillist = (await Promise.all(promises))
						.filter(item => item && item.message);
					setStore({ ...store, planetDetails: planetDetaillist, planetMain: planetMainList, isLoadingPlanet: false })
				} catch (error) {
					console.error('Error fetching planets:', error)
				}
			},

			loadVehicleDetails: async (who) => {
				let vehicleMainList = [];
				const store = getStore();

				let url = `https://www.swapi.tech/api/vehicles/`;
				if (who == "next") url = store.vehicleMain[0].next;
				if (who == "previous") url = store.vehicleMain[0].previous;

				try {
					const response = await fetch(url);
					if (!response.ok) {
						throw new Error(`Network response from api/people was not ok`);
					}
					const data = await response.json();
					vehicleMainList.push(data)

					console.log(data.next, data.previous)

					const promises = data.results.map(vehicle =>
						fetch(vehicle.url)
							.then(res => res.json())
							.catch(err => {
								console.error('Error fetching vehicle:', vehicle.name, err);
								return null;
							})
					);

					const vehicleDetaillist = (await Promise.all(promises))
						.filter(item => item && item.message);
					setStore({ ...store, vehicleDetails: vehicleDetaillist, vehicleMain: vehicleMainList, isLoadingVehicle: false })
				} catch (error) {
					console.error('Error fetching vehicles:', error)
				}
			},

			loadSpeciesDetails: async (who) => {
				let speciesMainList = [];
				const store = getStore();

				let url = `https://www.swapi.tech/api/species/`;
				if (who == "next") url = store.speciesMain[0].next;
				if (who == "previous") url = store.speciesMain[0].previous;

				try {
					const response = await fetch(url);
					if (!response.ok) {
						throw new Error(`Network response from api/people was not ok`);
					}
					const data = await response.json();
					speciesMainList.push(data)

					console.log(data.next, data.previous)

					const promises = data.results.map(species =>
						fetch(species.url)
							.then(res => res.json())
							.catch(err => {
								console.error('Error fetching species:', species.name, err);
								return null;
							})
					);

					const speciesDetaillist = (await Promise.all(promises))
						.filter(item => item && item.message);
					setStore({ ...store, speciesDetails: speciesDetaillist, speciesMain: speciesMainList, isLoadingSpecies: false })
				} catch (error) {
					console.error('Error fetching vehicles:', error)
				}
			},

		}
	};
};

export default getState;
