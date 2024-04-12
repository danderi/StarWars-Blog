import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { LoadingComponent } from "./LoadingComponent.jsx";



export const PlanetComponents = () => {
    const { store, actions } = useContext(Context)
    
    let handlerPlanetNext = ()=>{
            const who = "next";
            actions.loadingPlanetMessage();
            actions.loadPlanetDetails(who);
        }

    let handlerPlanetPrevious = ()=>{
            const who = "previous";
            actions.loadingPlanetMessage();
            actions.loadPlanetDetails(who);
        }

    let handlerFavorites = (name)=>{
        actions.addToFavorites(name);
    }

    return (
        <div style={{margin: "30px"}}>
            <h3 className="peopleComponents ms-3">Planets {store.isLoadingPlanet === true ? <span className="fs-5"><LoadingComponent /></span> : <span></span>}</h3>
            <div className="d-flex justify-content-center mb-4">
                {store.planetMain.length === 0 || store.planetMain[0].previous === null? <p></p>: <button type="button" className="btn btn-dark me-2" onClick={handlerPlanetPrevious}><GrPrevious /></button>}
                {store.planetMain.length === 0 || store.planetMain[0].next === null? <p></p>: <button type="button" className="btn btn-dark" onClick={handlerPlanetNext}><GrNext /></button>}
            </div>
            {store.planetDetails.length === 0 ? (
                <div style={{Height: "10vh", color:"gray"}}>
                    <h1 className="d-flex justify-content-center"><LoadingComponent /></h1>
                </div>
            ) : (
            <div className="overflow-x-auto" style={{ maxWidth: "100%", Height: "10vh" }}>
                <div className="scroll-container" style={{ maxWidth: "100%", maxHeight: "100%", overflowX: "auto" }}>
                    <div className="row flex-nowrap" style={{ margin: "0" }}>
                        {store.planetDetails.map((planet, index) => (
                            <div key={index} className="col-4" style={{ width: "300px", padding: "0 4px" }}>
                                <div className="card-main" style={{ width: "75%" }}>
                                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.result.uid}.jpg`} className="card-img-top" alt="..." style={{ height: "10%" }} />
                                    <div className="card-body mb-3">
                                        <h5 className="card-title">{planet.result.properties.name}</h5>
                                        <Link to={`/cardView/${planet.result.uid}`} className="btn btn-outline-dark me-4">View Details</Link>
                                        <button type="button" className="btn btn-outline-warning" onClick={()=>handlerFavorites(planet.result.properties.name)}><CiHeart /></button>
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
