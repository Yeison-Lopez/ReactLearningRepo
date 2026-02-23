import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TODOlist } from './TODOlist';
import { TodoItem } from './TodoItem';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TODOlist>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TODOlist>
      
      
    </div>
  );
}




export default App;
