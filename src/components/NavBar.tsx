const NavBar = () => {
  
  return (
    <div className='flex justify-between p-4 px-10 bg-blue-200 shadow-sm sticky top-0 z-10'>
      <div className="hover:cursor-pointer">Home</div>
      <div className="hover:cursor-pointer">Login</div>
    </div>
  )
}

export default NavBar