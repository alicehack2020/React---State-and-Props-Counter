import { useState } from "react";

function Counter(prob)
{
    const [value,setValue] =useState(prob.startCount);

  function increase(){
      
    setValue(value+1)
  }
 let decrease=()=>{
     
    setValue(value-1)
  }

  let double=()=>{
    let x=value*2
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
                <button id="Increase" onClick={increase}>Increase</button>
                <button id="decrease" onClick={decrease}>decrease</button>
                <button id="double" onClick={double}>double</button>
                <button id="clear" onClick={clearValue}>clear</button>
            </div>
        </>
        
    );
 
}

export {Counter}