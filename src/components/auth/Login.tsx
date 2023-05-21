import { useState } from "react"
import reactsvg from "../../assets/react.svg"
const Login = () => {
  const [info, setInfo] = useState({
    userName: "",
    userPassword:""
  })

  const haddleLogin = (e:any) => {
    e.preventDefault()
     console.log(info)
  }

  const onValueChange = (e: React.ChangeEvent<EventTarget>) => {
    const { name, value } = e.target as HTMLInputElement;
    setInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='grid text-left justify-center items-center  h-screen shadow-xl'>
      <div>
        <div className="w-full flex justify-center h-20 mb-4">
           <img data-testid="logo" src={reactsvg} className="" />
        </div>
       
      <h1
        data-testid="welcome"
        className='text-xl text-blue-400 '>
        Welcome To Tree Foundation
      </h1> 
        <div>
          
        <label data-testid="user name label" className="mt-4">Enter Your Name</label><br />
        <input type="text" name="userName" placeholder="Enter Your Name" className="w-full my-2 p-2 border-2 border-gray-300 rounded-md outline-transparent hover:outline-blue-400" value={info.userName} onChange={onValueChange}/><br />

        <label data-testid="user password label" >Enter Your Name</label><br />
        <input type="password" name="userPassword"   placeholder="Enter Your Password" className="w-full my-2 p-2 border-2 border-gray-300 rounded-md outline-transparent hover:outline-blue-400" value={info.userPassword} onChange={onValueChange}/><br />
        
        <button data-testid="loginButton" disabled={!info.userName || !info.userPassword} onClick={haddleLogin} className={`w-full p-2 bg-blue-300 text-xl hover:cursor-pointer ${!info.userName || !info.userPassword ? 'hover:cursor-not-allowed' : ''}`}>Login</button>
       
      </div>
      
      </div>
      </div>
  )
}

export default Login