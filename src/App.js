import React, { useState } from 'react'
import data from './data';
import SingleQuestion from "./SingleQuestion"
function App() {
  const [question,setQuestion]=useState(data);
;  return (
    <div className="mv4">
<div className="tc ttc">
  <h1 className="ma3 red">questions and answers about login</h1>
  <div>
{question.map((question)=>{
  return <SingleQuestion key={data.id} {...question}/>;
})}


  </div>


</div>
    </div>
  )
}
export default App
