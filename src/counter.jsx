import { useState } from "react"

function Counter() {
  const [counter,setCounter] = useState(5)

  const addvalue =()=>{
    setCounter(counter+1)
  }
  const removeValue =(value)=>{
    if(counter >= 1){
        setCounter(counter-1)
    }else   { alert("please click positive number")}

  }
  return (
    <>
      <h1>counterValue {counter}</h1>
      <button onClick={addvalue}>add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default Counter
