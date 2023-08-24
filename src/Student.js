import { useState } from "react";

const Student=({})=>{
    let students=["Kamran","Sana","Apoo","Shreyanshi"];
    return (<div>
       {
        students.map(val=>{
            return <div>{val}</div>
        })
       }
    </div>)
}

export default Student;