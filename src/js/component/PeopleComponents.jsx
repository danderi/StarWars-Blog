import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { LoadingComponent } from "./LoadingComponent.jsx";
import noPicture from "../../img/no-picture.jpg"




export const PeopleComponents = () => {
    const { store, actions } = useContext(Context)
    
    let handlerPeopleNext = ()=>{
            const who = "next";
            actions.loadingPeopleMessage();
            actions.loadPeopleDetails(who);
        }

    let handlerPeoplePrevious = ()=>{
            const who = "previous";
            actions.loadingPeopleMessage();
            actions.loadPeopleDetails(who);
        }

    let handlerFavorites = (name)=>{
        actions.addToFavorites(name);
    }

    return (
        <div style={{margin: "30px"}}>
            <h3 className="peopleComponents ms-3">People {store.isLoadingPeople === true ? <span className="fs-5"><LoadingComponent /></span> : <span></span>}</h3>
            <div className="d-flex justify-content-center mb-4">
                {store.peopleMain.length === 0 || store.peopleMain[0].previous === null? <p></p>: <button type="button" className="btn btn-dark me-2" onClick={handlerPeoplePrevious}><GrPrevious /></button>}
                {store.peopleMain.length === 0 || store.peopleMain[0].next === null? <p></p>: <button type="button" className="btn btn-dark" onClick={handlerPeopleNext}><GrNext /></button>}
            </div>
            {store.peopleDetails.length === 0 ? (
                <div style={{Height: "10vh", color:"gray"}}>
                    <h1 className="d-flex justify-content-center"><LoadingComponent /></h1>
                </div>
            ) : (
            <div className="overflow-x-auto" style={{ maxWidth: "100%", Height: "10vh" }}>
                <div className="scroll-container" >
                    <div className="row flex-nowrap" style={{ margin: "0" }}>
                        {store.peopleDetails.map((person, index) => (
                            <div key={index} className="col-4" style={{ width: "300px", padding: "4px" }}>
                                <div className="card-main" style={{ width: "75%" }}>
                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${person.result.uid}.jpg`} className="card-img-top" onError={(e)=> e.target.src = noPicture} alt="..." style={{ height: "10%" }} />
                                    <div className="card-body mb-3">
                                        <h5 className="card-title">{person.result.properties.name}</h5>
                                        <Link to={`/cardView/${person.result.uid}`} className="btn btn-outline-light me-4">View Details</Link>
                                        <button type="button" className="btn btn-outline-warning" onClick={()=>handlerFavorites(person.result.properties.name)}><CiHeart /></button>
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
