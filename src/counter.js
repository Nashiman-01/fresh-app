import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";

function Counter() {
    const [count, set] = useState(0);
    const Increase = () => {
        set(count + 1);
    }
    const Decrease = () => {
        set(count - 1);
    }
    const Reset = () => {
        set(0);
    };

    return (
        <div style={{ border: '2px solid black', height: '300px', borderRadius: '20px', boxShadow: '2px 4px 8px gray', padding: '50px', margin: '100px' }}>
            <h3 style={{ color: 'darkgreen', textAlign: 'left' }}>Counter App</h3>
            <div style={{ textAlign: 'center', marginTop: '15px', }}>
                <h1 style={{ fontSize: '35px' }}>My Simple Counter App 🧮</h1>
                <p style={{ fontSize: '26px', color: 'blue' }}>Count: {count}</p>
                <div style={{ display: 'flex', gap:'40px', margin: '80px' }}>
                    <button onClick={Increase} style={{ padding: '15px', fontSize: '24px', boxShadow: '0px 0px 15px hotpink', color: 'white', backgroundColor: 'hotpink', border: 'none', borderRadius: '10px', left: '210px', position: 'relative' }}>Increase</button>
                    <button onClick={Decrease} style={{ padding: '15px', fontSize: '24px', color: 'white', backgroundColor: 'hotpink', border: 'none', borderRadius: '10px', boxShadow: '0px 0px 15px hotpink', left: '210px', position: 'relative' }}>Decrease</button>
                    <button
                        onClick={Reset}
                        style={{
                            padding: '15px',
                            position:'relative',
                            left:'200px',
                            fontSize: '24px',
                            color: 'white',
                            backgroundColor: 'hotpink',
                            border: 'none',
                            borderRadius: '10px',
                            boxShadow: '0px 0px 15px hotpink'
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
