import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TODOlist } from './TODOlist';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text: 'cortar cebolla', completed: true},
  {text: 'TTomar curso de intro  a React.js', completed: true},
  {text: 'Llorar con la llorona', completed: true},
  {text: 'LALLALALALA', completed: true}
];


function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TODOlist>
        {defaultTodos.map(todo =>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TODOlist>
      
      <CreateTodoButton/>
    </React.Fragment>
  );
}




export default App;
