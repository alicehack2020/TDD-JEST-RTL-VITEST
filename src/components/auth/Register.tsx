import { useState } from "react"
import logo from "../../assets/city.png"

const Register = () => {
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
    gender:""
   })
   const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setInfo((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e:any) => {
    e.preventDefault()
     console.log(info)
  }


  return (
    <div className=" mt-5">
      <div className="flex justify-center w-full pt-10">
        <h1>Registration Form</h1>
      </div>
      <div className="flex justify-between w-full p-14 flex-col md:flex-row items-center">
        <div className="md:w-1/3">
           <img src={logo} alt="" />
        </div>
       
       
       <form onSubmit={handleSubmit} className="space-y-2 w-full md:w-1/2 ">
        <div className="flex flex-col space-y-2">
          <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" className="border border-gray-200 rounded p-1 focus:outline-none" value={info.fname} onChange={handleChange} />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname"  className="border border-gray-200 rounded p-1 focus:outline-none" value={info.lname} onChange={handleChange} />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" className="border border-gray-200 rounded p-1 focus:outline-none" value={info.email} onChange={handleChange} />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"  className="border border-gray-200 rounded p-1 focus:outline-none" value={info.password} onChange={handleChange} />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="mobile">Mobile Number</label>
          <input type="number" id="mobile" name="mobile" className="border border-gray-200 rounded p-1 focus:outline-none" value={info.mobile} onChange={handleChange} />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="gender">Select Gender</label>
            <select  
            name="gender"
            id="gender"
            value={info.gender}
              onChange={handleChange}
              className="py-2 border border-gray-200 focus:outline-none"
          >
          <option value="">Select Option</option>       
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
          </div>
          <div className="flex justify-center">
          <button disabled={!info.fname || !info.lname || !info.email || !info.password || !info.mobile} className="p-2 bg-green-300 rounded w-1/2 mt-4 hover:cursor-pointer" type="submit">Register</button>
          </div>
       </form>
      </div>
       
    </div>
  )
}

export default Register