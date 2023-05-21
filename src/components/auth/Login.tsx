import { useState } from "react"

const Login = () => {
  const [userName,setUserName]=useState("") 
  const [userPassword,setUserPassword]=useState("") 


  const haddleLogin = () => {
    console.log("clicked")
  }

  return (
    <div className='grid text-left justify-center items-center h-screen shadow-xl'>
    <div >
      <h1
        data-testid="welcome"
        className='text-xl text-blue-400 '>
        Welcome To Tree Foundation
      </h1> 
      <div>
        <label data-testid="user name label" className="mt-4">Enter Your Name</label><br />
        <input type="text" name="userName" placeholder="Enter Your Name" className="w-full my-2 p-2 border-2 border-gray-300 rounded-md outline-transparent hover:outline-blue-400" value={userName} onChange={e=>setUserName(e.target.value)}/><br />
        
        <label data-testid="user password label" >Enter Your Name</label><br />
        <input type="password" name="userPassword"   placeholder="Enter Your Password" className="w-full my-2 p-2 border-2 border-gray-300 rounded-md outline-transparent hover:outline-blue-400" value={userPassword} onChange={e=>setUserPassword(e.target.value)}/><br />
        <button data-testid="loginButton" disabled={!userName || !userPassword} onClick={haddleLogin} className="w-full p-2 bg-blue-300 text-xl hover:cursor-pointer">Login</button>
       
      </div>
      
      </div>
      </div>
  )
}

export default Login