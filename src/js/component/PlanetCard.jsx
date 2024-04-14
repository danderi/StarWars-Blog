import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import {LoadingComponent} from "./LoadingComponent.jsx";
import  Tatooine  from "../../img/Tatooine.jpg";

export const PlanetCard = () => {
  const { uid } = useParams(); // extraigo el UID de la URL
  const { store } = useContext(Context);

  // Encuentro a la planeta correspondiente al UID proporcionado
  const planet = store.planetDetails.find(planet => planet.result.uid === uid);

  if (!planet) {
    return <h3 className="d-flex justify-content-center" style={{color:"gray"}}><LoadingComponent /></h3>;
  }

  return (
    <div className="container mt-4" style={{width: "60%", background:"black", color:"white", padding:"12px"}}>
      <div className="card" style={{background:"black"}}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src={uid === "1" ? Tatooine : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{planet.result.properties.name}</h5>
              <p className="card-text">Diameter: {planet.result.properties.diameter}</p>
              <p className="card-text">Rotation period: {planet.result.properties.rotation_period}</p>
              <p className="card-text">Orbital period: {planet.result.properties.orbital_period}</p>
              <p className="card-text">Gravity: {planet.result.properties.gravity}</p>
              <p className="card-text">Population: {planet.result.properties.population}</p>
              <p className="card-text">Climate: {planet.result.properties.climate}</p>
              <p className="card-text">Terrain: {planet.result.properties.terrain}</p>
              <p className="card-text">Surface water: {planet.result.properties.surface_water}</p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};