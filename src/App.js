import React from 'react';
import Card from './components/Card';
import {useState} from 'react';
function App() {
const [dataType, setDataType]=useState("Pending")

  const Overdue=()=>
  {
    setDataType("Overdue");
  }
  const Completed=()=>
  {
    setDataType("Completed");
  }
 
  return (
    <>
<div className="container">
<button type="button" onClick={Completed} className="btn btn-primary mx-2">Completed</button>
<button type="button" onClick={Overdue} className="btn btn-primary mx-2">Overdue</button>
<button type="button" className="btn btn-primary mx-2">Pending</button>
<Card dataType={dataType}></Card>

</div>
</>
);

}

export default App;
