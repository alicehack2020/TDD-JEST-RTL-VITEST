import { useReducer, useState } from "react"

const initialState=0
const reducer = (state: any, action: any) => {
    if (action.type === "INC")
    {
        return state+1  
    }
    else if(action.type === "DEC"){
        return state-1 
    }
    else {
        return state  
    }
    
}

const ReducerLogic = () => {
     
    // const [count, setCount] = useState(0)
    const[count,dispath]=useReducer(reducer,initialState)
  return (
      <div className="grid place-content-center mt-4 grid-cols-3 gap-3 mx-11 items-center">
        
          <button onClick={() => dispath({type:"INC"})} className="p-2 bg-green-600 rounded">inc</button>    
          <div className="w-full flex justify-center">
             <h1 className={count>=0?"text-4xl text-green-800 font-extrabold":"text-red-800 text-4xl font-extrabold"}>count:{count}</h1>
          </div>
           <button onClick={()=>dispath({type:"DEC"})} className="p-2 bg-red-600 rounded">inc</button>    
     </div>
  )
}

export default ReducerLogic