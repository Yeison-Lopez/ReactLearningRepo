import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TODOlist } from '../TODOlist';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';


function AppUI({
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