import { useState } from 'react';
import './App.css';

import TodoList from "../src/components/TodoList/TodoList";
import AddTodo from "../src/components/AddTodo/AddTodo";


function App() {

  const [todo, setTodo] = useState([])

  return (
    <div className="container">
      <div className='section'>
        <p className='head'>todos</p>
        <div className='block'>
              <AddTodo todo={todo} setTodo={setTodo}  />
              <TodoList todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
