import { useState } from "react"

const Login = () => {
  const [userName,setUserName]=useState("") 
  const [userPassword,setUserPassword]=useState("") 

  return (
    <div>
      <h1
        data-testid="welcome"
        className='text-xl text-blue-400 py-4'>
        Welcome to tree foundation
      </h1> 
      <div>
        <label data-testid="user name label" className="mt-4">Enter Your Name</label><br />
        <input type="text" name="" id="" placeholder="Enter Your Name" className="mb-2 mt-2" value={userName} onChange={e=>setUserName(e.target.value)}/><br />
        
        <label data-testid="user password label" >Enter Your Name</label><br />
        <input type="password" name="" id="" placeholder="Enter Your Password" className="mt-2" value={userPassword} onChange={e=>setUserPassword(e.target.value)}/>
        
        <button data-testid="loginButton" disabled={!userName || !userPassword}></button>
      </div>
    </div>
  )
}

export default Login