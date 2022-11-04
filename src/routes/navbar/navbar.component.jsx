import {Outlet} from 'react-router-dom'


const NavBar = () => {
    return (
      <div>
        <div>
          <h1>Navbar here!</h1>
        </div>
        <Outlet />
      </div>
    )
  }

export default NavBar