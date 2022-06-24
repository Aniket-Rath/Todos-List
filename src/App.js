import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos"
import React, {useState} from "react"
import {AddTodo} from "./MyComponents/AddTodo";

function App() 
{
  let initTodo
  if(localStorage.getItem("todos")===null)
  {
      initTodo=[];
  }
  else 
  {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  
  const onDelete = (todo) =>
  {
    console.log("Are you sure ?",todo);
    setTodos(todos.filter((e) => {
      return e!== todo;
    } ));
    localStorage.getItem("todos");
  }

  const addTodo = (title,desc) =>{
    console.log("Adding to Todos",title,desc)
    let sno;
    if(todos.length===0)
    {
        sno = 0;
    }
    else
    {sno = todos[todos.length-1].sno + 1;}
    const myTodo = {
      sno: sno,
      title: title,
      desc:desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    if(localStorage.getItem("todos")){
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  }


  const [todos, setTodos] = useState([initTodo]);
    return (
        <>
            <Header title=" My Todo's List | " searchBar ={false}/>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            <Footer/>
        </>
    );
}

export default App;
