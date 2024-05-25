import React from "react";
import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

const ActionButton=()=>{
    const {cnt,Increment,Decrement,Reset}=useContext(CounterContext);

    return(
        <div className="mt-3">
            <button className="btn btn-primary" onClick={()=>Increment()}>Increment</button>
            <button className="btn btn-secondary" onClick={()=>Decrement()}>Decrement</button>
            <button className="btn btn-danger" disabled={cnt==0} onClick={()=>Reset()}>Reset</button>
        </div>
    )
}
export default ActionButton;