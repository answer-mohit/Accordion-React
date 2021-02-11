import React, { useState } from 'react'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai';
import './question.css';
function SingleQuestion({id,title,info}) {
    const [showInfo,setShowInfo]=useState(false);
    return (
        <div className="question pa3">
       <section className="section">
       <h2 className="green">{title}</h2>
<button className="f4 grow no-underline br-pill ph2 pv2 mb2 dib red bg-light-gray" onClick={()=>setShowInfo(!showInfo)}>
{showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>}
</button>

       </section>
       <div>
    {
        showInfo?<p className="tl">{info}</p>:null
    }
</div>
        </div>
    )
}

export default SingleQuestion
