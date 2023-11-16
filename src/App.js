import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Header from './Mycomponants/Header';
import Todos from "./Mycomponants/Todos";
import Footer from "./Mycomponants/Footer";
import AddTos from './Mycomponants/AddTos';
import { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import About from './Mycomponants/About';

function App() {
  const getTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  function addTodos(title, dsc) {
    console.log("This the console log program");
    let n;
    if (todos.length === 0) {
      n = 0;
    } else {
      n = todos[todos.length - 1].sno;
    }
    const mytodos = {
      title: title,
      dsc: dsc,
      sno: n + 1
    }

    settodos([...todos, mytodos])
  }

  function onDelete(todo) {
    console.log('I am delete ', todo)
    settodos(todos.filter((e) => {
      return todo.sno !== e.sno;
    }))
  }

  const [todos, settodos] = useState(getTodosFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("This the printf");
  }, [todos]);

  return (
    <div>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Header title='Todos' serabar={true} />
     
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTos addTodos={addTodos} />
                <Todos todo={todos} onDelete={onDelete} />
              </>
            );
          }} />
          <Route exact path="/about" component={About} />
       
        <Footer />
      </Router>
    </div>
  );
}

export default App;
