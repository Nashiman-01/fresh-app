
import React from "react";

function Skills(props) {
    return (
        <div style={{padding:'20px', fontSize:'24px' }}>
           
            <h2 style={{textAlign:'center', color:'Darkblue'}}>About Me:</h2>
            <p>{props.bio} </p>
            <h3>Skills:</h3>
            <ul style={{listStyleType:'revert-layer'
            }}>
                {props.skills.map((skills, i) => <li key={i}> {skills}</li>)}
            </ul>
        </div>
    );
}

export default Skills;