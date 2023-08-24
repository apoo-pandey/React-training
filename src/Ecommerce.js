import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
//import axios from "axios";

const Ecommerce=()=>{
    let [products,setproducts]=useState([{productName:"shampoo",status:"available",price:50},{productName:"bucket",status:"not-available",price:200}]);
    
    const addProd=(event)=>{
        event.preventDefault();// to prevent the form from auto submitting
        const formObject=event.target;// it will give you form html object
        console.log(formObject);
        // access the name of the input field.
       //to get the value inside the input field.
        let newProd=[...products,{
            productName:event.target.list1.value,
            status:event.target.list2.value,
            price:event.target.list3.value
        }];
        setproducts(newProd);
        event.target.list1.value="";
        event.target.list2.value="";
        event.target.list3.value="";
    }
    const deleteProd=(indexToDelete)=>{
        let newTodo=[...products];
        newTodo.splice(indexToDelete,1);
        setproducts(newTodo);
    }
    const reset=()=>{
        setproducts([]);
    }
    return(
        <div className="visible">
            <form onSubmit={addProd}>
            <TextField className="input" id="outlined-basic" label="product-name" variant="outlined" name="list1"/>
            <TextField className="input" id="outlined-basic" label="status" variant="outlined" name="list2"/>
            <TextField className="input" id="outlined-basic" label="price" variant="outlined" name="list3"/>
            <Fab type="submit" size="medium" color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
            <IconButton className="del-btn" onClick={reset} aria-label="delete" size="large">
                <DeleteIcon />
            </IconButton>
            </form>
            {products.map((val,index)=>{
            return <div className="show">
            Name: {val.productName}
            <br/>
            Status: {val.status}
            <br />
            price: {val.price}<IconButton className="del-btn" onClick={()=>{deleteProd(index)}} aria-label="delete" size="large">
                               <DeleteIcon />
                             </IconButton><br/> <br />
            </div>
          })
        }
        </div>
    )
}

export default Ecommerce;
