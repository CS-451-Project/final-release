import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import PasswordChecklist from "react-password-checklist"
import { FaUserCog } from 'react-icons/fa'
import { toast } from 'react-toastify'


const EditUser = () => {
    var base64 = require('base-64');
    const navigate = useNavigate();
    const {userId} = useParams();

    const [ firstName, setFirstName ] = useState('');
    const [ middleInitial, setMiddleInitial ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        fetch(`https://localhost:7000/api/user/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setFirstName(data.firstName)
            setMiddleInitial(data.middleInitial)
            setLastName(data.lastName)
            setEmail(data.email)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        // Tests validation based on regex above.
        if (!passwordValidation.test(password)) {
        setPasswordError(
            'Password must contain at least 8 characters, including 1 letter, 1 number, and 1 special character (@$!%*#?&).'
        );
        return;
        }
        
        const user = { FirstName: firstName, MiddleInitial: middleInitial, LastName: lastName, Password: password }
        fetch(`https://localhost:7000/api/user/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Basic ${base64.encode(`${localStorage.getItem("AuthHeader")}`)}`
            },
            body: JSON.stringify(user)
            })
            // head
            .then(response => {
                console.log(response)
            })
            .then(data => {
                console.log(data)
                navigate(`/dashboard/${userId}`)
                localStorage.setItem('AuthHeader', `${email}:${password}`);
                toast.success('Your user changes were saved!', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            })
    }

    const handleBack = () => {
        if(window.confirm('Your changes may not be saved, do you wish to go back?')){
            {navigate(-1)}
        }
    }

  return (
    <div className='flex justify-center flex-wrap p-8 my-12'>
        <div className=' bg-gray-100 w-96 border-r-2 grid place-items-center py-4'>
            <div className=' '>
                <div className='flex justify-center '>
                    <FaUserCog  size={100} />
                </div>
                <div className='flex justify-center'>
                    <h1 className='text-2xl font-bold'>{email}</h1>
                </div>
            </div>
            
        </div>
        <div className='w-96 bg-gray-100 p-8 '>
            <form onSubmit={handleSubmit} className=''>
                {/* First name */}
                <label>
                    <div className='pb-1'>
                        First Name:
                    </div>
                    <input 
                        type='text' 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        className='w-full mb-4 p-1'
                    />
                </label>
                {/* Middle Initial */}
                <label>
                    <div className='pb-1'>
                        Middle Initial:
                    </div>
                    <input 
                        type='text' 
                        value={middleInitial} 
                        maxLength={1}
                        onChange={(e) => setMiddleInitial(e.target.value.toUpperCase())} 
                        className='w-full mb-4 p-1'
                    />
                </label>
                {/* Last name */}
                <label>
                    <div className='pb-1'>
                        Last Name:
                    </div>
                    <input 
                        type='text' 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        className='w-full mb-4 p-1'
                    />
                </label>
                {/* password */}
                <div>
                    New Password:
                </div>
                <label className='relative'>
                    <div className='absolute right-2 pt-2'>
                        {showPassword ? <AiOutlineEye onClick={() => setShowPassword(!showPassword)}/> 
                        : <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)}/>} 
                    </div>
                    <input 
                        type={showPassword ? "text" : "password"}
                        name="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full mb-4 p-1'
                        required 
                    />
                    
                </label >
                {/* confirm password */}
                <div>
                    Confirm Password:
                </div>
                <label className='relative'>
                    <div className='absolute right-2 pt-2'>
                        {showConfirmPassword ? <AiOutlineEye onClick={() => setShowConfirmPassword(!showConfirmPassword)}/> 
                        : <AiOutlineEyeInvisible onClick={() => setShowConfirmPassword(!showConfirmPassword)}/>} 
                    </div>
                    <input 
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        className='w-full mb-4 p-1'
                        required 
                    />
                    
                </label >
                <div className='flex flex-col pb-4'>
                    <PasswordChecklist
                        rules={["minLength","specialChar","number","match"]}
                        minLength={8}
                        value={password}
                        valueAgain={confirmPassword}
                        onChange={(isValid) => {}}
                    />
                </div>
                <div className='flex justify-between pt-12'>
                    <button className='bg-gray-500 text-white p-2 rounded-lg' onClick={handleBack}>Back</button>
                    <button value={handleSubmit} className='bg-green-500 text-white p-2 rounded-lg'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditUser