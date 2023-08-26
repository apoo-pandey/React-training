import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const EcommerceStruct=()=>{
    let [products, setproducts]=useState([{productName:"shampoo",status:"available",price:50}, {productName:"bucket",status:"not-available",price:250}]);

    const addProd =(event)=>{
        event.preventDefault();
        const formObject=event.target;
        console.log(formObject);
        let newProd={
            productName:formObject.list1.value,
            status:formObject.list2.value,
            price:formObject.list3.value
        }
        setproducts([...products,newProd]);
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
        <>
        <ProductFrom addProd={addProd} reset={reset} />
        <ProductShow products={products} deleteProd={deleteProd} />
        </>
    )
}

export default EcommerceStruct;


const ProductFrom=({addProd,reset})=>{
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
    </div>
    )
}


const ProductShow=({products,deleteProd})=>{
    return(
        <div className="visible">
    {products.map((val,index)=>{
        return <ProductList val={val} deleteProd={deleteProd} index={index} />
      })
    }
    </div>
    )
}

const ProductList=({val,deleteProd,index})=>{
    return(
        <div className="show">
            Name: {val.productName}
            <br/>
            Status: {val.status}
            <br />
            price: {val.price}<IconButton className="del-btn" onClick={()=>{deleteProd(index)}} aria-label="delete" size="large">
                               <DeleteIcon />
                             </IconButton><br/> <br />
            </div>
    )
}