
import React, {useState} from "react";

function Contact() {
    const [send, setSend] = useState(false);
    const click = () => {setSend(true);};
    return (
        <div style={{padding:'20px', fontSize:'20px'}}>
            <h2 style={{textAlign:'center'}}>Stay Contacted:</h2>
            {send ? (<p style={{fontSize:'20px', color:'darkblue',textAlign:'center'}}>I'll be there anytime.</p>):(<button onClick={click} style={{padding:'15px', width:'100px', borderRadius:'10px', outline:'none', border:'none',color:'white', backgroundColor:'darkblue',fontSize:'20px', marginLeft:'500px'}}>Send </button>)}
        </div>
    );
}

export default Contact;