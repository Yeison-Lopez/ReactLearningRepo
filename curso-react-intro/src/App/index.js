import React from 'react';
import logo from './platzi.webp';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

function App() {
 
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]); 
  const [searchValue, setSearchValue] = React.useState(''); 

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeTodo = (text) => {
    const newTodos = [...todos]; // this is for copying the 4 todos we have
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    ); // we are looking for the index of the array that has the value "text" in it
    newTodos[todoIndex].completed = true;  // we are marking this as completed (true)
    saveTodos(newTodos); // we are reprinting what whe have above (const [todos, setTodos] = React.useState(defaultTodos); )
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos]; // this is for copying the 4 todos we have
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    ); // we are looking for the index of the array that has the value "text" in it
    newTodos.splice(todoIndex, 1); // this allows us to extract the position and delete it
    saveTodos(newTodos); // we are reprinting what whe have above (const [todos, setTodos] = React.useState(defaultTodos); )
  };

  return(
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );

}

export default App;
