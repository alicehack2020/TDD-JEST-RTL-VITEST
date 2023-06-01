import { useState } from "react"
const StateLoginc = () => {
 const [count,setCount]=useState(0)
  return (
      <div className="grid place-content-center mt-4 grid-cols-3 gap-3 mx-11 items-center">
        
          <button onClick={() => setCount(count + 1)} className="p-2 bg-green-600 rounded">inc</button>    
          <div className="w-full flex justify-center">
             <h1 className={count>=0?"text-4xl text-green-800 font-extrabold":"text-red-800 text-4xl font-extrabold"}>count:{count}</h1>
          </div>
           <button onClick={()=>setCount(count-1)} className="p-2 bg-red-600 rounded">inc</button>    
     </div>
  )
}

export default StateLoginc