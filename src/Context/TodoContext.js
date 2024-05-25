import {createContext, useState} from 'react';

export const TodoContext=createContext(null);

 export const TodoProvider=(props)=>{
    const [Todo,setTodo]=useState(['Go to gym','Play Cricket','Go for walk','Have dinner']);

    const AddTodo=(item)=>{
        setTodo([...Todo,item]);
    }

    const DeleteTodo=(index)=>{
        setTodo(Todo.filter((ele,i)=>i!=index));
    }

    const EditTodo=(index,newtask)=>{
        setTodo(Todo.map((ele,i)=>(
            i===index ? newtask : ele
        )))
    }
       return(
        <TodoContext.Provider value={{Todo,AddTodo,DeleteTodo,EditTodo}}>
            {props.children}
        </TodoContext.Provider>
       )
}