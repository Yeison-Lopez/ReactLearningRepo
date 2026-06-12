import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TODOlist } from '../TODOlist';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';


function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
    return (
        <>

        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch 
            searchValue = {searchValue}
            setSearchValue ={setSearchValue}
        
        />

        <TODOlist>
            {loading && <p>estamos cargando...</p>}
            {error && <p>Desespérate, hubo un error</p>}
            {(!loading && searchedTodos.length===0) && <p>Crea tu primer TODO!</p>}


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

export{ AppUI };