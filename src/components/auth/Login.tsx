import { useState } from "react"
import earth from "../../assets/earth.gif"
import city from "../../assets/city.png"
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
    <div className='sm:flex-col md:flex lg:flex-row text-left justify-evenly items-center p-14 mt-10 shadow-xl'>
         <div>
             <img src={city} alt="" />
         </div>
        <div>
          <div className="w-full lg:flex justify-center h-20 mb-4 hidden ">
            <img alt="logo" src={earth} className="" />
          </div>
        
        <h1
          className='text-xl text-green-400 '>
          Welcome To Tree Foundation
        </h1> 
          <div className="w-50 flex-col bg">
            <div>
              <label className="mt-4" htmlFor="userName">Enter Your Name </label>  
              <input type="text" id="userName" name="userName" placeholder="Enter Your Name" className=" w-full my-2 p-2 border-2 border-gray-300 rounded-md outline-transparent hover:outline-green-400" value={info.userName} onChange={onValueChange}/> 
            </div>
            
            <div className="flex-col">
            <label htmlFor="userPassword">Enter Your Password </label> 
            <input type="password" id="userPassword" name="userPassword" placeholder="Enter Your Password" className="w-full my-2 p-2 border-2 border-gray-300 rounded-md outline-transparent hover:outline-green-400" value={info.userPassword} onChange={onValueChange}/>  
          
            </div>
            
          
          <button disabled={!info.userName || !info.userPassword} onClick={haddleLogin} className={` w-full p-2 bg-green-300 text-xl  ${!info.userName || !info.userPassword ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}`}>Login</button>
        
        </div>
        
        </div>
     
    </div>
  )
}

export default Login