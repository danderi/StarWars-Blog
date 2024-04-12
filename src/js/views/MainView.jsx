import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {Navbar} from "../component/Navbar.jsx"
import {Footer} from "../component/Footer.jsx"
import { PeopleComponents } from "../component/PeopleComponents.jsx";
import StarBackground from "../../img/background.jpg";
import { PlanetComponents } from "../component/PlanetComponents.jsx";
import { VehicleComponents } from "../component/VehicleComponents.jsx";
import { SpeciesComponents } from "../component/SpeciesComponents.jsx";

export const MainView = () => {
  return (
    <div style={{backgroundImage: `url(${StarBackground})`, backgroundSize: "cover"}}>
        <Navbar />
        <PeopleComponents />
        <PlanetComponents />
        <VehicleComponents />
        <SpeciesComponents />
        <Footer />
    </div>
  )
}
