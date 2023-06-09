import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log('hit');

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
                <div className="">
                    <FormInput
                    label='Display Name'
                    type="text" 
                    required 
                    onChange={handleChange} 
                    value={displayName} 
                    name="displayName" />
                </div>
                <div className="">
                    <FormInput
                    label='Email'
                    type="email"
                     required 
                     onChange={handleChange} 
                     value={email} 
                      name="email" />
                </div>
                <div className="">
                    <FormInput
                    label='Password'
                    type="password" 
                    required 
                    onChange={handleChange} 
                    value={password} 
                     name="password" />
                </div>
                <div className="">
                    <FormInput
                    label='Confirm Password'
                    type="password" 
                    required 
                    onChange={handleChange} 
                    value={confirmPassword} 
                     name="confirmPassword" />
                </div>
                <div className="button-container">
                    <Button buttonType='default' type="submit">Sign up</Button>
                </div>
            </form>
    </div>
  ); 
};

export default SignUpForm;