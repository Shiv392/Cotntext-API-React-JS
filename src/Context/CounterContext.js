import { createContext, useState } from "react";

export const CounterContext=createContext();

export const CounterProvider=(props)=>{
    const [cnt,setCount]=useState(0);

    const Increment=()=>{
        setCount(prevState=>prevState+1);
    }
    const Decrement=()=>{
        setCount(prevState=>prevState-1);
    }
    const Reset=()=>{
        setCount(0);
    }

    return(
        <CounterContext.Provider value={{cnt,Increment,Decrement,Reset}}>
          {props.children}
        </CounterContext.Provider>
    )
}