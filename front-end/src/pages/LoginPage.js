import React from 'react'
import LoginWindow from '../components/LoginWindow';
// import PasswordChecklist from "react-password-checklist"
// import ProtoDemo from '../components/ProtoDemo';

const LoginPage = () => {

  return (
    <div  className='flex justify-center pt-16' data-testid="window-id">
        <LoginWindow />
    </div>
  )
}

export default LoginPage
