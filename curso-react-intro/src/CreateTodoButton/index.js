import './CreateTodoButton.css';

function CreateTodoButton(){
    return(
        <button 
        className="CreateTodoButton"
        onClick={
            ()=> console.log('You have clicked the item')
        }
        >+</button>
    );
}

export { CreateTodoButton }