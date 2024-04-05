const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadPeopleData: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/people');
					if(!response.ok){
						throw new Error("Network response was not ok")
					}
					const jsonData = await response.json()
					const namesArray = jsonData.results.map(person => person.name);	
					console.log(namesArray)
					setStore({people:namesArray})
				} catch (error){
					console.log("error at loading people data");
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
