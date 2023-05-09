import { Fragment , useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { ReactComponent as DecoLogo } from '../../assets/logo.svg';
import './navigation.styles.scss'
import {signOutUser} from '../../utils/firebase/firebase.utils.js';


const Navigation = () =>{

    const {currentUser, setCurrentUser} = useContext(UserContext);
    // console.log(currentUser);



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
                <Link className="nav-link" to='/add-shop-product'>
                    Add Product
                </Link>
                <Link className="nav-link" to='/about-us'>
                    About us
                </Link>
                <Link className="nav-link" to='/contact-us'>
                    Contact us
                </Link>
                {
                    currentUser ? 
                    (
                    <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                    ) :(
                    <Link className="nav-link" to='/auth'> Sign In </Link>
                    )
                }
                
            </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
)
}

export default Navigation 