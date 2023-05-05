import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as DecoLogo } from '../../assets/logo.svg';
import './navigation.styles.scss'

const Navigation = () =>{
return (
    <Fragment>
      <div className="navigation">
        <div className="navigation-container">
            <div className="logo-container">
                <Link className="nav-link" to='/'>
                    <DecoLogo className='sitlogo' />
                </Link>
            </div>
            <div className="link-container">
                <Link className="nav-link" to='/shop'>
                    shop
                </Link>
                <Link className="nav-link" to='/about-us'>
                    About us
                </Link>
                <Link className="nav-link" to='/contact-us'>
                    Contact us
                </Link>
                <Link className="nav-link" to='/sign-in'>
                    Sign In
                </Link>
                <Link className="nav-link" to='/shop'>
                    shop
                </Link>
            </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
)
}

export default Navigation 