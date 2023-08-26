function Todolistpdf(){
    function addTodo({setTodo}){
        function handleSubmit(event){
            const input=event.target.Todolist.value;
            setTodo([...Todos,input]);
        }
    }
    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" name="Todolist" placeholder="Todo" />
                <button type="submit">Add</button>
                <button type="submit" onClick={reset}>Delete all</button>
            </form>
        </div>
    )
}