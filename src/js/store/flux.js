const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleDetails: [],
			peopleMain:[],
			isLoadingPeople: false 
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			addToFavorites: (name)=> {
				const store = getStore();
				let newFavorites = store.favorites;
				if(!newFavorites.includes(name)){
					newFavorites.push(name);
				}
				setStore({favorites: newFavorites, ...store })
			},

			refreshFavorites: (name) => {
				let store = getStore();
				let newestFavorites = store.favorites;
				let finalFavorites = newestFavorites.filter((item)=> item !== name);
				setStore({favorites: finalFavorites })
			},


			loadingPeopleMessage: () => {
				const store = getStore();
				setStore({...store, isLoadingPeople: true})
			},

			loadPeopleDetails: async (who) => {
				let peopleMainList = [];
				const store = getStore();

				let url = `https://www.swapi.tech/api/people/`;
				if(who == "next") url=store.peopleMain[0].next;
				if(who == "previous")url=store.peopleMain[0].previous;
				
				try{
					const response = await fetch(url);
					if(!response.ok){
						throw new Error(`Network response from api/people was not ok`);
					}
					const data = await response.json();
					peopleMainList.push(data)

					console.log(data.next,data.previous)

					let peopleDetaillist = [];
					
					for(let character of data.results){
					try{
						const response = await fetch(character.url);
						const characterData = await response.json();
						if(!characterData.message) continue;
						peopleDetaillist.push(characterData)

						console.log("desde flux", characterData);
					}catch(error){
						console.error('Error fetching character details for:', character.name, error)
					}
				}
				// setStore({...store, peopleDetails:peopleDetaillist, peopleMain:peopleMainList})
				setStore({...store, peopleDetails:peopleDetaillist, peopleMain:peopleMainList, isLoadingPeople: false})
				console.log("ESTE ES EL URL EN FLUX", store.peopleMain[0].next)
				}catch(error){
					console.error('Error fetching characters:', error)
				}
			},



			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
