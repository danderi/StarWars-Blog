import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import {LoadingComponent} from "./LoadingComponent.jsx";

export const PeopleCard = () => {
  const { uid } = useParams(); // Extraer el UID de la URL
  const { store } = useContext(Context);

  // Encontrar la persona correspondiente al UID proporcionado
  const person = store.peopleDetails.find(person => person.result.uid === uid);

  // Verificar si la persona fue encontrada
  if (!person) {
    return <h3 className="d-flex justify-content-center" style={{color:"gray"}}><LoadingComponent /></h3>;
  }

  return (
    <div className="container mt-4" style={{width: "60%", background:"black", color:"white", padding:"12px"}}>
      <div className="card" style={{background:"black"}}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{person.result.properties.name}</h5>
              <p className="card-text">Gender: {person.result.properties.gender}</p>
              <p className="card-text">Height: {person.result.properties.height}</p>
              <p className="card-text">Birth Year: {person.result.properties.birth_year}</p>
              <p className="card-text">Mass: {person.result.properties.mass}</p>
              <p className="card-text">Hair Color: {person.result.properties.hair_color}</p>
              <p className="card-text">Skin Color: {person.result.properties.skin_color}</p>
              <p className="card-text">Eye Color: {person.result.properties.eye_color}</p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




