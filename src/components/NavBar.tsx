import {useNavigate} from "react-router-dom"


const NavBar = () => {
  const navigate=useNavigate()
  
  const pageChange = (e:any) => {
    navigate(e.target.title) 
  }
  return (
    <div className='flex justify-between p-4 px-10 bg-blue-200 shadow-sm sticky top-0 z-10'>
      <div className="hover:cursor-pointer" onClick={pageChange} title="/">Home</div>
      <div className="hover:cursor-pointer"  onClick={pageChange}  title="/login">Login</div>
    </div>
  )
}

export default NavBar