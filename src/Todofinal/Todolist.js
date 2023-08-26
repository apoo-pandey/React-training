import TodosShow from "./TodosShow";
const Todolist=({todolist,deleteTodo})=>{
    return(
    <>
    {todolist.map((val,index)=>{
    return <TodosShow val={val} deleteTodo={deleteTodo} index={index} />
  })
}
</>)}

export default Todolist;