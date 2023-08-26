import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Todoform=({addTodo})=>{
    return(
<form onSubmit={addTodo}>
{/*<Button variant="contained" onClick={getData}>Get Data</Button>*/}
 <TextField className="input" id="outlined-basic" label="Outlined" variant="outlined" name="todoname"/> 
 {/*<input type="text" name="todoname"/>*/}
 <select name="status">
    <option value="complete">Complete</option>
    <option value="incomlete">Incomplete</option>
 </select>
 <Button type="submit" variant="contained">Add</Button> 
  {/*<button type="submit" onClick={reset}>Clear all</button>*/}
</form>)
}

export default Todoform;
