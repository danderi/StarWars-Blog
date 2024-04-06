import React, { useState, useEffect, useContext } from "react";
import { useFormAction } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";


export const PeopleComponents = () => {

    const navigate = useNavigate()
    const { store, actions } = useContext(Context)

    useEffect(() => {
        // actions.loadPeopleNames();
        actions.loadPeopleDetails();
    }
        , [])
    console.log(store.peopleDetails)

    const handlerNavigate = (person) =>{
        navigate(`/cardView/${person.result.uid}`)
    }

    return (
        <div>
            <h1>People</h1>
            <button type="button" class="btn btn-light">Previous</button>
            <button type="button" class="btn btn-dark">More People</button>
            {store.peopleDetails.length === 0 ? (
                <p>loading...</p>
            ) : (
            <div className="overflow-x-auto" style={{ maxWidth: "100%", maxHeight: "50vh" }}>
                <div className="scroll-container" style={{ maxWidth: "100%", maxHeight: "100%", overflowX: "auto" }}>
                    <div className="row flex-nowrap" style={{ margin: "0" }}>
                        {store.peopleDetails.map((person, index) => (
                            <div key={index} className="col-4" style={{ minWidth: "12rem", padding: "0 4px" }}>
                                <div className="card" style={{ width: "75%" }}>
                                    <img src="..." className="card-img-top" alt="..." style={{ height: "60%" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{person.result.properties.name}</h5>
                                        <p className="card-text">Gender: {person.result.properties.gender}</p>
                                        <p className="card-text">Height: {person.result.properties.height}</p>
                                        <p className="card-text">Birth Year: {person.result.properties.birth_year}</p>
                                        <Link to={`/cardView/${person.result.uid}`}><a href="#" className="btn btn-primary">View Details</a></Link>
                                        <button onClick={()=>handlerNavigate(person)}></button>
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
