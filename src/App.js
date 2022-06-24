import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos"
import React, {useState} from "react"

function App() 
{
  
  const onDelete = (todo) =>
  {
    console.log("Are you sure ?",todo);
    setTodos(todos.filter((e) => {
      return e!== todo;
    } ))
  }


  const [todos, setTodos] = useState([

    {
      sno:1,
      title: "Go to Market.",
      desc:"We need to Shop for  Something",
    },
    {
      sno:2,
      title: "Go to Mall.",
      desc:"We need to Shop for  Something",
    },
    {
      sno:3,
      title: "Return Home.",
      desc:"We need to Return Home",
    }
  ]);
    return (
        <>
            <Header title=" My Todo's List | " searchBar ={false}/>
            <Todos todos={todos} onDelete={onDelete}/>
            <Footer/>
        </>
    );
}

export default App;
