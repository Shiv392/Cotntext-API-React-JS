import React from "react";
import { useState,useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

const DisplayCount=()=>{
    const {cnt,Increment,Decrement,Reset}=useContext(CounterContext);

    return(
        <div className="mt-3">
            <h1 className="text text-primary text-center">Count : {cnt}</h1>
        </div>
    )
}
export default DisplayCount;