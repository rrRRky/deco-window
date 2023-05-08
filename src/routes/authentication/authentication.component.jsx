// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
// import { 
//         auth,
//         signInWithGooglePopup, 
//         createUserDocumentFromAuth,
//         } from '../../utils/firebase/firebase.utils';
import './authentication.styles.scss'

import SignUpForm from '../../components/sign-up/sing-up.component';
import SignInForm from '../../components/sign-in/sing-in.component';
const Authentication =() =>{

    return(
        <div className='auth-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
};

export default Authentication;