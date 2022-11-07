import {Fragment} from 'react'
import {Outlet, Link} from 'react-router-dom'
import './navbar.styles.scss'
import {ReactComponent as NavBarLogo} from '../../assets/health-svgrepo-com.svg'


const NavBar = () => {
    return (
      <Fragment>
        <div className='navBar'>
            <Link className="logo-container" to='/'>
                   <div>
                   <NavBarLogo className='navbar-logo'/>
                   </div> 
            </Link>
          <div className="nav-links-container">
            <Link className='nav-link' to='/shop'>
                Shop
            </Link>
            <Link className='nav-link' to='/sign-in'>
                Sign in
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default NavBar