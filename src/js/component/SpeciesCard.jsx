import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import {LoadingComponent} from "./LoadingComponent.jsx";

export const SpeciesCard = () => {
  const { uid } = useParams(); // extraigo el UID de la URL
  const { store } = useContext(Context);

  // Encuentro a la speciesa correspondiente al UID proporcionado
  const species = store.speciesDetails.find(species => species.result.uid === uid);

  if (!species) {
    return <h3 className="d-flex justify-content-center" style={{color:"gray"}}><LoadingComponent /></h3>;
  }

  return (
    <div className="container mt-4" style={{width: "60%", background:"black", color:"white", padding:"12px"}}>
      <div className="card" style={{background:"black"}}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src={`https://starwars-visualguide.com/assets/img/species/${uid}.jpg`} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{species.result.properties.name}</h5>
              <p className="card-text">Clasificacition: {species.result.properties.classification}</p>
              <p className="card-text">Designation: {species.result.properties.designation}</p>
              <p className="card-text">Average height: {species.result.properties.average_height}</p>
              <p className="card-text">Average lifespan: {species.result.properties.average_lifespan}</p>
              <p className="card-text">Hair colors: {species.result.properties.hair_colors}</p>
              <p className="card-text">Skin colors: {species.result.properties.skin_colors}</p>
              <p className="card-text">Eye colors: {species.result.properties.eye_colors}</p>
              <p className="card-text">Language: {species.result.properties.language}</p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};