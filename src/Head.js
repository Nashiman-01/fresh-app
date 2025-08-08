
import React from "react";

function Head(props) {
    return (
        <div style={{backgroundColor:'#f0f0f0',fontSize:'24px' ,padding:'10px' , border:'1px solid gray', textAlign:'center'}}>

            <h1 style={{color:'Darkblue'}}>{props.name}</h1>
            <p>{props.title} </p>
        </div>
    );
}

export default Head;