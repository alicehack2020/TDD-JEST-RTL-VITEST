import {NavLink} from "react-router-dom"

const navItem = [
  {
     href:"/",
     title:"Home"
  },
  {
    href:"/login",
    title:"Login"
  },
  {
    href:"/form",
    title:"Form"
  }
]

const NavBar = () => {
  
  return (
    <div className='flex justify-between p-4 px-10 bg-green-200 shadow-sm sticky top-0 z-10'>
      {
        navItem.map((e, index) => (
          <NavLink className="hover:cursor-pointer" key={index} title={e.href} to={e.href}>{e?.title}</NavLink>
        ))
      }
     </div>
  )
}

export default NavBar