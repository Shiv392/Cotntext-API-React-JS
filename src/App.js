import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from './Context/TodoContext';
import {useFormik} from 'formik';
import DisplayCount from './Counter/DisplayCount';
import ActionButton from './Counter/ActionButton'


function App() {
  const {Todo,AddTodo,DeleteTodo,EditTodo}=useContext(TodoContext);
  const [isEdited,setEdited]=useState(false);
  const [editindex,setEditIndex]=useState(-1);

  const TodoForm=useFormik({
    initialValues:{
      taskinput:''
    },
    onSubmit:(values,{resetForm})=>{
      console.log(values);
      if(!isEdited){
        AddTodo(values.taskinput);
        resetForm();
      }
      else{
        EditTodo(editindex,values.taskinput);
        resetForm();
        setEdited(false);
        setEditIndex(-1);
      }
    }
  })

  useEffect(()=>{
  console.log(Todo)
  },[])

  const edit=(task,editindex)=>{
     setEditIndex(editindex);
     setEdited(true);
     TodoForm.setFieldValue('taskinput',task);
  }

  return (
    <div className="App mt-5 container">
     <div className='input-container mb-3'>
      <form className='form' onSubmit={TodoForm.handleSubmit}>
        <div className='d-flex w-auto'>
          <input type='text' className='form-control' placeholder='Enter New Task' {...TodoForm.getFieldProps('taskinput')} />
          {
            !isEdited ? <button className='btn btn-primary' type='submit'>Add Task</button> : 
            <button className='btn btn-warning' type='submit'>Edit Task</button>
          }
        </div>
      </form>
     </div>
     <div className='table-container'>
      <table className='table table-responsive table-dark'>
        <thead>
          <tr>
            <th>No</th>
            <th>Task Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Todo.map((ele,index)=>(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{ele}</td>
                <td>
                  <button className='btn btn-warning' onClick={()=>edit(ele,index)}>Edit</button>
                  <button className='btn btn-danger' onClick={()=>DeleteTodo(index)}>Delete</button>
                </td>
                </tr>
            ))
          }
        </tbody>
      </table>
     </div>
    <DisplayCount />
    <ActionButton />
    </div>
  );
}

export default App;
