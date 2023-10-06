import React from "react";
function Test(props){
    return(
        <>
        <img src={props.url} width={100}/>
        <h2>{props.name}</h2>
        </>
    );
}
    export default function propSample(){
        return(
            <>
            <Test username='Hello'/>
            <Test username='Hello 2 '/>
            </>
        );
    }
