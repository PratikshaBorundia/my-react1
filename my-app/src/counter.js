import React, { useState } from "react";
export default function counter(){
    const[num,setNum]=useState(5);
    function Inc(){
        setNum(num+1)
            }
    return(
        <>
        <div>counter</div>
        <button onClick={Inc}> Click Here</button>
        </>
    )
}