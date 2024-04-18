import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import {LoadingComponent} from "./LoadingComponent.jsx";
import noPicture from "../../img/no-picture.jpg"

export const VehicleCard = () => {
  const { uid } = useParams(); 
  const { store } = useContext(Context);
  const vehicle = store.vehicleDetails.find(vehicle => vehicle.result.uid === uid);

  if (!vehicle) {
    return <h3 className="d-flex justify-content-center" style={{color:"gray"}}><LoadingComponent /></h3>;
  }

  return (
    <div className="container mt-4" style={{width: "60%", background:"black", color:"white", padding:"12px"}}>
      <div className="card-unit">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} onError={(e)=> e.target.src = noPicture} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">{vehicle.result.properties.name}</h1>
              <p className="card-text">Model: {vehicle.result.properties.model}</p>
              <p className="card-text">Vehicle Class: {vehicle.result.properties.vehicle_class}</p>
              <p className="card-text">Manufacturer: {vehicle.result.properties.manufacturer}</p>
              <p className="card-text">Price in credits: {vehicle.result.properties.cost_in_credits}</p>
              <p className="card-text">Length: {vehicle.result.properties.length}</p>
              <p className="card-text">Crew: {vehicle.result.properties.crew}</p>
              <p className="card-text">Passengers: {vehicle.result.properties.passengers}</p>
              <p className="card-text">Max atmosphering speed: {vehicle.result.properties.max_atmosphering_speed}</p>
              <p className="card-text">Cargo Capacity: {vehicle.result.properties.cargo_capacity}</p>
              <p className="card-text">Consumables: {vehicle.result.properties.consumables}</p>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};