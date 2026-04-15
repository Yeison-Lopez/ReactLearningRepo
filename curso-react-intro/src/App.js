import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TODOlist } from './TODOlist';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

//const defaultTodos = [
//  {text: 'cortar cebolla', completed: true},
//  {text: 'TTomar curso de intro  a React.js', completed: false},
//  {text: 'Llorar con la llorona', completed: true},
//  {text: 'LALLALALALA', completed: false}
//];

//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOS_V1')

function useLocalStorage(itemName,initialValue){
  

  const localStorageItem = localStorage.getItem(itemName);
  
  let parsedItem;

  if (!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem=[];
  }
  else{
    parsedItem=JSON.parse(localStorageItem);
  }

  const[item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) =>{
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  };

  return[item,saveItem];

}


function App() {

  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]); 
  const [searchValue, setSearchValue] = React.useState(''); 

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;


  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));


  const completeTodo = (text) => {
    const newTodos = [...todos]; // this is for copying the 4 todos we have
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    ); // we are looking for the index of the array that has the value "text" in it
    newTodos[todoIndex].completed = true;  // we are marking this as completed (true)
    saveTodos(newTodos); // we are reprinting what whe have above (const [todos, setTodos] = React.useState(defaultTodos); )
  };


  const deleteTodo = (text) => {
    const newTodos = [...todos]; // this is for copying the 4 todos we have
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    ); // we are looking for the index of the array that has the value "text" in it
    newTodos.splice(todoIndex, 1); // this allows us to extract the position and delete it
    saveTodos(newTodos); // we are reprinting what whe have above (const [todos, setTodos] = React.useState(defaultTodos); )
  };

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue ={setSearchValue}
      
      />

      <TODOlist>
        {searchedTodos.map(todo =>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)} // we are using a function above we have to expect a funtion here 
                                                      //  That is why we are using "() =>" here
            onDelete={() => deleteTodo(todo.text)} 
          />
        ))}
      </TODOlist>
      
      <CreateTodoButton/>
    </>
  );
}




export default App;
