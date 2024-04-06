const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleDetails: [],
			peopleList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			loadPeopleNames: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/people');
					if(!response.ok){
						throw new Error("Network response was not ok")
					}
					const jsonData = await response.json()
					const namesArray = jsonData.results.map(person => person.name);	
					
			
					
					setStore({peopleNames:namesArray})
					
				} catch (error){
					console.log("error at loading people data");
				}
			},

			loadPeopleDetails: async () => {
				let listPeopleArray = [];
				try{
					const response = await fetch(`https://www.swapi.tech/api/people/`);
					if(!response.ok){
						throw new Error(`Network response from api/people was not ok`);
					}
					const data = await response.json();
					
					listPeopleArray.push(data);

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
				const store = getStore()
				setStore({...store, peopleDetails:peopleDetaillist, peopleList:peopleDetaillist})

				}catch(error){
					console.error('Error fetching characters:', error)
				}
			},



			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
