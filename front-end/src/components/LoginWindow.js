import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// import PasswordChecklist from "react-password-checklist"

const LoginWindow = () => {

    const navigate = useNavigate();

    // use state to store the username, password and passwordError and set the initial value to an empty string
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    // function to handle the submit button
    const handleSubmit = (e) => {
        // prevent the default action of the submit button
        // this is to prevent the page from refreshing when the submit button is clicked
        e.preventDefault();
        
        let user = {Email, Password};

        fetch(`https://localhost:7000/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
            })
            // head
            .then(response => {
                if (response.ok) {
                // handle successful response
                    return response.text();
                } 
                else {
                // handle error response
                    throw new Error('Username or password is incorrect or user does not exist');
                }
            })
            // body (function)
            .then(data => {
                localStorage.setItem('userId', data);
                localStorage.setItem('AuthHeader', `${user.Email}:${user.Password}`);                
                navigate(`/`);
                toast.success('Logged In', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            ).catch(error => {
                console.error('Error:', error);
                setError(error.message);
            });
    };


  return (
    <div className='relative'>
        <div className='border bg-gray-100 p-4 w-96'>
            <div className='flex justify-center pb-4'>
                <h1 className='font-bold text-2xl'>
                    Login
                </h1>
            </div>
            <div>
                {error && <p className='text-red-500'>{error}</p>}
            </div>
            <div className=''>
                {/* // form to handle the username and password */}
                <form className='flex flex-col' onSubmit={handleSubmit} name="loginForm">
                    {/* // username input */}
                    {/* //the label tag is used to label the input field */}
                    <label className='flex flex-col py-4' htmlFor="email">
                            {/* // the input tag is used to create an input field */}
                            <input 
                                // the type attribute is used to specify the type of input field
                                type="email"
                                // id is used to identify the input field
                                id="email"
                                // value is used to set the initial value of the input field
                                value={Email}
                                name="email"
                                // placeholder is used to set the placeholder text of the input field
                                placeholder='Email'
                                data-testid="add-email-input"
                                // onChange is used to handle the change event of the input field
                                // onchange is a arrow function that takes in an event as a parameter
                                // event.target.value is used to get the value of the input field
                                onChange={(event) => setEmail(event.target.value)}
                                className='border min-w-36 p-2'
                                required
                                />
                    </label>
                    <label className='flex flex-col py-4' htmlFor="password">
                            <input 
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={Password}
                                placeholder='Password'
                                data-testid="add-password-input"
                                onChange={(event) => setPassword(event.target.value)}
                                className='bordermin-w-36 p-2'
                                required
                            />
                            <div className='absolute pt-3 right-6'>
                                {showPassword ? <AiOutlineEye onClick={() => setShowPassword(!showPassword)}/> 
                                : <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)}/>} 
                            </div>
                    </label >
                    <div className='flex justify-center pb-8'>
                        {/* // the submit button */}
                        <input 
                            // the type attribute is used to specify the type of input field
                            type="submit" 
                            // the value attribute is used to set the value of the input field
                            value="Log In" 
                            className='p-4 border rounded-md bg-green-500 hover:bg-green-700 duration-200 text-white font-bold cursor-pointer' 
                        />
                    </div>
                </form>
            </div>
            <div className='flex justify-center '>
                <div className='flex flex-col'>
                    <h1>Don't have an account?</h1>
                    <button className='bg-green-400 p-2 border rounded-md w-full hover:bg-green-300 duration-200' onClick={() => navigate(`/signup`)}>Create Account</button>
                </div>
            </div>
            <div className='pt-8'>
                <a href="/" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Forgot Password?</a>
            </div>
            
            
        </div>
    </div>
  )
}

export default LoginWindow