import React, { useState } from 'react'
import PasswordChecklist from "react-password-checklist"
import UseFetch from '../components/UseFetch';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const SignupWindow = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        FirstName:'',
        LastName:'',
        Email:'',
        Password:''
    });

    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [ageError, setAgeError] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const handleSubmit = (e) => {
        // Prevents page from refreshing.
        e.preventDefault();
        const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        // Tests validation based on regex above.
        if (!passwordValidation.test(user.Password)) {
        setPasswordError(
            'Password must contain at least 8 characters, including 1 letter, 1 number, and 1 special character (@$!%*#?&).'
        );
        return;
        }

        // console.log(user);
        
        fetch(`https://localhost:7000/api/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
            })
            // head
            .then(response => {
                console.log(response)
            })
            .then(data => {
                console.log(data)
                navigate(`/login`)
            })

    };

    
  return (
    <div className='pt-4'>

        <div className='relative'>
            <div className='border bg-gray-100 p-4 '>
                <div className='flex justify-center pb-4'>
                    <h1 className='font-bold text-2xl'>
                        Sign Up
                    </h1>
                </div>
                <div className='flex flex-col'>

                    <form onSubmit={handleSubmit}>
                        {/* First Name */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type="text"
                                name="FirstName"
                                value={user.FirstName}
                                placeholder='Enter First Name'
                                onChange={(event) => 
                                        setUser({
                                            // This is the spread operator. It copies the values of the object into a new object.
                                            // so we can change the properties of the object without changing the original object.
                                        ...user,
                                        [event.target.name]: (event.target.value),
                                        })
                                    }
                                className='border min-w-36 p-2'
                                required 
                                />
                        </label>
                        {/* Last Name */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type="text"
                                name="LastName"
                                value={user.LastName}
                                placeholder='Enter Last Name'
                                onChange={(event) => 
                                        setUser({
                                            // This is the spread operator. It copies the values of the object into a new object.
                                            // so we can change the properties of the object without changing the original object.
                                        ...user,
                                        [event.target.name]: (event.target.value),
                                        })
                                    }
                                className='border min-w-36 p-2'
                                required 
                                />
                        </label>
                        {/* Email */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type="email"
                                name="Email"
                                value={user.Email}
                                placeholder='Enter Email'
                                onChange={(event) => 
                                    setUser({
                                        // This is the spread operator. It copies the values of the object into a new object.
                                        // so we can change the properties of the object without changing the original object.
                                        ...user,
                                    [event.target.name]: (event.target.value)
                                    })
                                }
                                className='border min-w-36 p-2'
                                required 
                                />
                        </label>
                        {/* password */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type={showPassword ? "text" : "password"}
                                name="Password"
                                value={user.Password}
                                placeholder='Enter Password'
                                onChange={(event) => 
                                    setUser({
                                        // This is the spread operator. It copies the values of the object into a new object.
                                        // so we can change the properties of the object without changing the original object.
                                        ...user,
                                    [event.target.name]: (event.target.value)
                                    })
                                }
                                className='bordermin-w-36 p-2'
                                required 
                            />
                            <div className='absolute pt-3 right-5'>
                                {showPassword ? <AiOutlineEye onClick={() => setShowPassword(!showPassword)}/> 
                                : <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)}/>} 
                            </div>
                        </label >
                        {/* confirm password */}
                        <label className='flex flex-col py-4'>
                            <input 
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={confirmPassword}
                                placeholder='Confirm Password'
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                className='bordermin-w-36 p-2'
                                required 
                            />
                            <div className='absolute pt-3 right-5'>
                                {showConfirmPassword ? <AiOutlineEye onClick={() => setShowConfirmPassword(!showConfirmPassword)}/> 
                                : <AiOutlineEyeInvisible onClick={() => setShowConfirmPassword(!showConfirmPassword)}/>} 
                            </div>
                        </label >
                        <div className='pb-4'>
                            <PasswordChecklist
                                rules={["minLength","specialChar","number","match"]}
                                minLength={8}
                                value={user.Password}
                                valueAgain={confirmPassword}
                                onChange={(isValid) => {}}
                            />
                        </div>
                        <div className='flex justify-center'>
                            <input type="submit" value="Sign Up" className='p-4 border rounded-md bg-green-500 hover:bg-green-700 duration-200 text-white font-bold cursor-pointer' />
                        </div>
                        <div>
                            <p className='text-red-500'>{ageError}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignupWindow;

