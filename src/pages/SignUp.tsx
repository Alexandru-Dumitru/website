import React, { ReactElement } from 'react';
import '../App.css';
import Background from '../images/img-8.jpg';


interface Props {}

// eslint-disable-next-line no-empty-pattern
function SignUp({}: Props): ReactElement {
  return (
    <h1 className='sign-up' style={{backgroundImage:`url(${Background})`}}>SIGN UP</h1>
  );
}

export default SignUp;
