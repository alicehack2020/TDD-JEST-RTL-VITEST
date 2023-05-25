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
    <div className='grid text-left justify-center items-center   p-40 shadow-xl'>
      <div>
        <div className="w-full flex justify-center h-20 mb-4">
           <img alt="logo" src={reactsvg} className="" />
        </div>
       
      <h1
        className='text-xl text-blue-400 '>
        Welcome To Tree Foundation
      </h1> 
        <div className="w-50">
          
           <label className="mt-4" htmlFor="userName">Enter Your Name </label><br /> 
           <input type="text" id="userName" name="userName" placeholder="Enter Your Name" className=" w-full my-2 p-2 border-2 border-gray-300 rounded-md outline-transparent hover:outline-blue-400" value={info.userName} onChange={onValueChange}/><br /> 
           
           
           <label htmlFor="userPassword">Enter Your Password </label><br />
           <input type="password" id="userPassword" name="userPassword" placeholder="Enter Your Password" className="w-full my-2 p-2 border-2 border-gray-300 rounded-md outline-transparent hover:outline-blue-400" value={info.userPassword} onChange={onValueChange}/> <br />
         
        
        <button disabled={!info.userName || !info.userPassword} onClick={haddleLogin} className={` w-full p-2 bg-blue-300 text-xl  ${!info.userName || !info.userPassword ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}`}>Login</button>
       
      </div>
      
      </div>
      </div>
  )
}

export default Login