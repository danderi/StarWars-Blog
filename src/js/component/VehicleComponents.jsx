import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { LoadingComponent } from "./LoadingComponent.jsx";
import noPicture from "../../img/no-picture.jpg"


export const VehicleComponents = () => {
    const { store, actions } = useContext(Context)
    
    let handlerVehicleNext = ()=>{
            const who = "next";
            actions.loadingVehicleMessage();
            actions.loadVehicleDetails(who);
        }

    let handlerVehiclePrevious = ()=>{
            const who = "previous";
            actions.loadingVehicleMessage();
            actions.loadVehicleDetails(who);
        }

    let handlerFavorites = (name)=>{
        actions.addToFavorites(name);
    }

    return (
        <div style={{margin: "30px"}}>
            <h3 className="vehicleComponents ms-3">Vehicles {store.isLoadingVehicle === true ? <span className="fs-5"><LoadingComponent /></span> : <span></span>}</h3>
            <div className="d-flex justify-content-center mb-4">
                {store.vehicleMain.length === 0 || store.vehicleMain[0].previous === null? <p></p>: <button type="button" className="btn btn-dark me-2" onClick={handlerVehiclePrevious}><GrPrevious /></button>}
                {store.vehicleMain.length === 0 || store.vehicleMain[0].next === null? <p></p>: <button type="button" className="btn btn-dark" onClick={handlerVehicleNext}><GrNext /></button>}
            </div>
            {store.vehicleDetails.length === 0 ? (
                <div style={{Height: "10vh", color:"gray"}}>
                    <h1 className="d-flex justify-content-center"><LoadingComponent /></h1>
                </div>
            ) : (
            <div className="overflow-x-auto" style={{ maxWidth: "100%", Height: "10vh" }}>
                <div className="scroll-container" style={{ maxWidth: "100%", maxHeight: "100%", overflowX: "auto" }}>
                    <div className="row flex-nowrap" style={{ margin: "0" }}>
                        {store.vehicleDetails.map((vehicle, index) => (
                            <div key={index} className="col-4" style={{ width: "300px", padding: "4px" }}>
                                <div className="card-main vehicle" style={{ width: "75%" }}>
                                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.result.uid}.jpg`} onError={(e)=> e.target.src = noPicture} className="card-img-top" alt="..." style={{ height: "10%" }} />
                                    <div className="card-body mb-3">
                                        <h5 className="card-title">{vehicle.result.properties.name}</h5>
                                        <Link to={`/vehicleCardView/${vehicle.result.uid}`} className="btn btn-outline-light me-4">View Details</Link>
                                        <button type="button" className="btn btn-outline-warning" onClick={()=>handlerFavorites(vehicle.result.properties.name)}><CiHeart /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
        </div>
    );
}