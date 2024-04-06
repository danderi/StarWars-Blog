import React, { useState, useEffect, useContext } from "react";
import { useFormAction } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleCard = () => {
  const { store, actions } = useContext(Context)
  console.log(store.peopleDetails)
  return (
    <div>
      <div className="card mb-3">
        <img src="..." className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{store.peopleDetails.result.properties.name}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
      </div>
    </div>
  )
}
