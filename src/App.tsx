import React, { useState } from 'react';
import { generate } from 'shortid';
import { MyForm } from './MyForm';
import { MyTable } from './MyTable';



const App = () => {

  const[rows, setRows] = useState([{
      id:'1',
      firstName:'Abelant',
      lastName:'Zahiri'
      
  }]);

  

 
return (
  <div className={"container"} style={{textAlign: "center"}}>
    <MyForm onSubmit={(data) => {
      setRows(currentState => [
        {
        id: generate(),
        ...data
        },
        ...currentState,
      ])
      }} />
      <MyTable rows={rows} 
                onClick={(data) => {
                setRows(currentState => [
                  ...currentState,
                ])
                }}
      />
  </div>
  );
};



export default App;