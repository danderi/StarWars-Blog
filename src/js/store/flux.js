const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],

			peopleDetails: [],
			peopleMain: [],
			peoplePage: 1,
			isLoadingPeople: false,

			planetDetails: [],
			planetMain: [],
			planetPage: 1,
			isLoadingPlanet: false,

			vehicleDetails: [],
			vehicleMain: [],
			vehiclePage: 1,
			isLoadingVehicle: false,

			speciesDetails: [],
			speciesMain: [],
			speciesPage: 1,
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
				const store = getStore();
				let page = store.peoplePage;
				if (who === "next") page = page + 1;
				if (who === "previous") page = page - 1;

				try {
					const [techRes, devRes] = await Promise.all([
						fetch(`https://www.swapi.tech/api/people/?page=${page}&limit=10`),
						fetch(`https://swapi.dev/api/people/?page=${page}`)
					]);

					const techData = await techRes.json();
					const devData = await devRes.json();

					const combined = techData.results.map((techItem, index) => ({
						result: {
							uid: techItem.uid,
							properties: devData.results[index]
						}
					}));

					const mainData = [{
						next: techData.next,
						previous: techData.previous
					}];

					setStore({
						peopleDetails: combined,
						peopleMain: mainData,
						peoplePage: page,
						isLoadingPeople: false
					});

				} catch (error) {
					console.error('Error fetching people:', error)
				}
			},

			loadPlanetDetails: async (who) => {
				const store = getStore();
				let page = store.planetPage;
				if (who === "next") page = page + 1;
				if (who === "previous") page = page - 1;

				try {
					const [techRes, devRes] = await Promise.all([
						fetch(`https://www.swapi.tech/api/planets/?page=${page}&limit=10`),
						fetch(`https://swapi.dev/api/planets/?page=${page}`)
					]);

					const techData = await techRes.json();
					const devData = await devRes.json();

					const combined = techData.results.map((techItem, index) => ({
						result: {
							uid: techItem.uid,
							properties: devData.results[index]
						}
					}));

					const mainData = [{
						next: techData.next,
						previous: techData.previous
					}];

					setStore({
						planetDetails: combined,
						planetMain: mainData,
						planetPage: page,
						isLoadingPlanet: false
					});

				} catch (error) {
					console.error('Error fetching planets:', error)
				}
			},

			loadVehicleDetails: async (who) => {
				const store = getStore();
				let page = store.vehiclePage;
				if (who === "next") page = page + 1;
				if (who === "previous") page = page - 1;

				try {
					const [techRes, devRes] = await Promise.all([
						fetch(`https://www.swapi.tech/api/vehicles/?page=${page}&limit=10`),
						fetch(`https://swapi.dev/api/vehicles/?page=${page}`)
					]);

					const techData = await techRes.json();
					const devData = await devRes.json();

					const combined = techData.results.map((techItem, index) => ({
						result: {
							uid: techItem.uid,
							properties: devData.results[index]
						}
					}));

					const mainData = [{
						next: techData.next,
						previous: techData.previous
					}];

					setStore({
						vehicleDetails: combined,
						vehicleMain: mainData,
						vehiclePage: page,
						isLoadingVehicle: false
					});

				} catch (error) {
					console.error('Error fetching vehicles:', error)
				}
			},

			loadSpeciesDetails: async (who) => {
				const store = getStore();
				let page = store.speciesPage;
				if (who === "next") page = page + 1;
				if (who === "previous") page = page - 1;

				try {
					const [techRes, devRes] = await Promise.all([
						fetch(`https://www.swapi.tech/api/species/?page=${page}&limit=10`),
						fetch(`https://swapi.dev/api/species/?page=${page}`)
					]);

					const techData = await techRes.json();
					const devData = await devRes.json();

					const combined = techData.results.map((techItem, index) => ({
						result: {
							uid: techItem.uid,
							properties: devData.results[index]
						}
					}));

					const mainData = [{
						next: techData.next,
						previous: techData.previous
					}];

					setStore({
						speciesDetails: combined,
						speciesMain: mainData,
						speciesPage: page,
						isLoadingSpecies: false
					});

				} catch (error) {
					console.error('Error fetching species:', error)
				}
			},

		}
	};
};

export default getState;
