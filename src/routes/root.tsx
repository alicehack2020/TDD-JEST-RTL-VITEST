 import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
      <>
          <NavBar />
          <div className="container mx-auto">
          <Outlet />
          </div>
      </>
  )
}

export default Root