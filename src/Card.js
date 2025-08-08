
import React from "react";

function Card({ name, role }) {
    return (
        <div style={{ border: '2px solid black', textAlign: 'center', margin: '20px',borderRadius:'15px',boxShadow:'2px 4px 8px gray', padding: '50px', width: '450px' }}>
            <h3 style={{ color: 'darkgreen', textAlign: 'left' }}>UserCard and components</h3>
            <div style={{ }}>
                <h1 style={{ color: 'darkblue' }}>👤 Interns Info App</h1>

                <div style={{ border: '1px solid black',borderRadius:'10px', padding: '100px', textAlign: 'center', margin: '10px', width: '200px', height: '100px' }}>
                    <h2 style={{ borderBottom: '2px dashed gray' }}>Name: {name}</h2>
                    <p> Profession: {role}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
