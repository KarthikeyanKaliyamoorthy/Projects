import React, {useState} from 'react';
import './App.css';
import {TodoTable} from './components/TodoTable';
import TodoForm from './components/TodoForm';

export const App = () => {

  const [showTodoForm,setShowTodoForm] = useState(false);

  const [todos,setTodos] = useState([{rowNo:1, desc:'Hair cut', assigned:'Kaarthiee'},
  {rowNo:2, desc:'Prepare interview', assigned:'Kaarthiee'},
  {rowNo:3, desc:'learn react', assigned:'Kaarthiee'},
  {rowNo:4, desc:'refresh Java 8', assigned:'Kaarthiee'}
]);
const addTodo = (assigned:string, desc:string) => {
  let rowNo=0;

  if(todos.length>0){
    rowNo=todos[todos.length-1].rowNo+1;
  } else {
    rowNo=1
  }

    const newTodo = {
      rowNo:rowNo,
      desc: desc,
      assigned:assigned
    }
    setTodos(todos => [...todos,newTodo]);
    console.log(todos);
  
}

const deleteTodo = (deleteTodoRowNo:number) => {
  let filtered = todos.filter(function(value){
    return value.rowNo!== deleteTodoRowNo;
  });
  setTodos(filtered);
}
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>Your Todo's</div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className='btn btn-primary' onClick={() => setShowTodoForm(!showTodoForm)}>
            {!showTodoForm?'New Todo':'Close New Todo'}</button>
          {showTodoForm && <TodoForm addTodo={addTodo}/>}
          
        </div>
      </div>
    </div>
  );
}
