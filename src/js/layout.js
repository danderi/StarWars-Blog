import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { MainView } from "./views/MainView.jsx";
import {CardView} from "./views/CardView.jsx";

import { PeopleComponents } from "./component/PeopleComponents.jsx";
import { PlanetComponents } from "./component/PlanetComponents.jsx";

import injectContext from "./store/appContext";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<MainView />} />
						<Route path="/mainView" element={<MainView />} />
						<Route path="/cardView/:uid" element={<CardView />} />
						<Route path="/people-components" element={<PeopleComponents />} />
						<Route path="/planet-components" element={<PlanetComponents />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
