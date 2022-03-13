import { useState } from "react";

function Counter(prob)
{
    const [value,setValue] =useState(prob.startCount);

  function increase(val){
      
    setValue(value+val)
  }
 let decrease=(val)=>{
     
    setValue(value-val)
  }

  let double=(val)=>{
    let x=value*val
    setValue(x)
  }

  let clearValue=()=>{
    let x=0
    setValue(x)
  }

    return(
    
        <>
            <h1 id="display">{value}</h1>
            <div className="flex">
                <button id="Increase" onClick={()=>increase(1)}>Increase</button>
                <button id="decrease" onClick={()=>decrease(1)}>decrease</button>
                <button id="double" onClick={()=>double(2)}>double</button>
                <button id="clear" onClick={clearValue}>clear</button>
            </div>
        </>
        
    );
 
}

export {Counter}