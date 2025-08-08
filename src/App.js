import React from "react";
import Counter from "./counter";
import Header from "./header";
import Card from "./Card";
import Head from "./Head";
import Skills from "./Skills";
import Contact from "./Contact";
function App() {
  const me ="I'm a frontend beginner learning React";
  const myskills=['HTML', 'CSS', 'JavaScript','React'];
  return (
    <div>
      <Header />
     <div style={{display:'flex'}}>
      <Card name="Nasheeman" role="Frontend Developer" />
      <Card name="Husna" role="Frontend Developer" />
      </div>
      
      <div style={{display:'flex'}}><Card name="Imdad" role="Wordpress" />
      <Card name="Saima" role="Frontend Developer" />
      </div>
      <Counter />
      <div style={{border:'2px solid black',boxShadow:'3px 6px 10px gray',borderRadius:'8px', margin:'40px'}}>
                    <h3 style={{textAlign:'left', color:'darkgreen'}}>Basic Profile Web</h3>
      <Head name="Nashiman Mahak" title="BSCS student at University of Chitral | Frontend Developer " />
      <Skills Bio={me} skills={myskills} />
      <Contact />
      </div>
    </div>
  );
}

export default App;
