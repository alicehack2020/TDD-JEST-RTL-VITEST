import {useNavigate} from "react-router-dom"

const navItem = [
  {
     href:"/",
     title:"Home"
  },
  {
    href:"/login",
    title:"Login"
  }
]

const NavBar = () => {
  const navigate = useNavigate()
  

  const onPageChange = (e:any) => {
    navigate(e.target.title)
  }


  return (
    <div className='flex justify-between p-4 px-10 bg-blue-200 shadow-sm sticky top-0 z-10'>
      {
        navItem.map((e, index) => (
          <div className="hover:cursor-pointer" key={index} title={e.href} onClick={onPageChange}>{e?.title}</div>
        ))
      }
     </div>
  )
}

export default NavBar