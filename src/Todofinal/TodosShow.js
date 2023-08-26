const TodosShow=({val,deleteTodo,index})=>{
    return(
        <div>
        Name:{val.name}
        <br/>
        Status:{val.status}<button onClick={()=>{deleteTodo(index)}}>Delete</button><br/> <br />
        </div>
    )
    }

export default TodosShow;