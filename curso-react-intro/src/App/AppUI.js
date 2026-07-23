import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TODOlist } from '../TODOlist';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';




function AppUI(){

    const{
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
    } = React.useContext(TodoContext);

    return (
        <>

        <TodoCounter  />
        <TodoSearch   />

        <TODOlist>
                    {loading && (
                        <>
                            < TodosLoading/>
                            < TodosLoading/>
                            < TodosLoading/>
                        </>
                    )}
                    {error && <TodosError/>}
                    {(!loading && searchedTodos.length===0) && <EmptyTodos/>}


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