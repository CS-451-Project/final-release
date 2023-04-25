import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { SiCircle } from 'react-icons/si'

const NavBar = () => {
    const navigate = useNavigate();
    // state that holds the navbar status
    // if the navbar is open then it is true else it is false
    const [navbar, setNavbar] = useState(false);
    const [isOpen, setOpen] = useState(false);
    let userId = "";

    if(localStorage.length > 0){
        userId = localStorage.getItem("userId");
    }

    const handleClick = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('AuthHeader');
        navigate('/');
        toast.success('Logged out successfully!', {
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

    return (
          <nav className="w-full bg-gray-100 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              {/* Logo and menu button */}
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/" className='flex flex-row'>
                            <h2 className="text-2xl font-bold text-black ">GIVING </h2>
                            <div className='grid place-items-center px-1'>
                                <SiCircle size={20}/>
                            </div>
                            <h2 className="text-2xl font-bold text-black">CIRCLE</h2>
                            
                        </a>
                        {/* Small screen menu/close buttons */}
                        {/* This will be hidden on screens at least `md` in size. */}
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                              {/* If the navbar is open then show the closed icon */}
                              {/* If the navbar is closed then show the menu icon */}
                                {navbar ? (
                                  // Close button icon
                                    // <img src={closeIcon} className="w-6 h-6 text-black" alt="menuIcon" />
                                    <AiOutlineClose/>
                                ) : (
                                  // Menu button icon
                                    // <img src={menuIcon} className="w-6 h-6 text-black" alt="menuIcon" />
                                    <AiOutlineMenu/>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Menu items */}
                <div>
                  {/* The function in the classname controls closing and opening in small screens */}
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}
                    >
                      {/* space is adding whitespace */}
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-black hover:text-green-600 duration-200">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-black hover:text-green-600 duration-200">
                                <button onClick={localStorage.length === 0 ? 
                                    () => {
                                        navigate("/login")
                                        toast.warn('You need to be logged in to create a fundraiser', {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                    });
                                    } : 
                                    () => navigate("/createFundraiser")}>Create Fundraiser</button>
                            </li>
                            <li className="text-black hover:text-green-600 duration-200">
                                <button onClick={localStorage.length === 0 ? 
                                    () => {
                                        navigate("/login")
                                        toast.warn('You need to be logged in to view your dashboard', {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                    });
                                    } : 
                                    () => navigate(`/dashboard/${localStorage.getItem("userId")}`)}>Dashboard</button>
                            </li>
                            <li className="text-black hover:text-green-600 duration-200">
                                <a href="/AboutUs">About Us</a>
                            </li>
                        </ul>
                        {/* Login and signup buttons  for small screens*/}
                        {localStorage.length > 0 ? (
                            <div className="mt-3 space-y-2 md:hidden flex justify-center">
                                <button onClick={() => setOpen(!isOpen)} className='px-4 py-2.5 text-center inline-flex items-center'>
                                    <CgProfile  size={40} />
                                </button>
                                <div className='relative'>
                                    <div className={`absolute top-11 -left-32 w-44 bg-white rounded divide-y divide-gray-100 shadow ${isOpen ? "block" : "hidden"}`}>
                                        <ul className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
                                            <li>
                                                <a href={`/dashboard/${userId}`} className="block py-2 px-4 hover:bg-gray-100">Dashboard</a>
                                            </li>
                                            <li >
                                                <a onClick={handleClick} href="/" className="block py-2 px-4 hover:bg-gray-100">Log Out</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-3 space-y-2 md:hidden ">
                                <a
                                    href="/login"
                                    className="inline-block w-full px-4 py-2 text-center text-white bg-green-600 rounded-md shadow hover:bg-gray-800 duration-200"
                                >
                                    Log in
                                </a>
                                <a
                                    href="/signup"
                                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 duration-200"
                                >
                                    Sign up
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                {/* Login and signup buttons for large screens*/}
                {localStorage.length > 0 ? (
                    // Should show profile pic with options to go to dashboard and logout
                    <div className="hidden space-x-2 md:inline-block">
                        <button onClick={() => setOpen(!isOpen)} className='px-4 py-2.5 text-center inline-flex items-center'>
                            <CgProfile  size={40} />
                        </button>
                        <div className='relative'>
                            <div className={`absolute right-0 -top-2 w-44 bg-white rounded divide-y divide-gray-100 shadow ${isOpen ? "block" : "hidden"}`}>
                                <ul classname=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
                                    <li>
                                        <a href={`/dashboard/${userId}`} className="block py-2 px-4 hover:bg-gray-100">Dashboard</a>
                                    </li>
                                    <li >
                                        <a onClick={handleClick} href="/" className="block py-2 px-4 hover:bg-gray-100">Log Out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="hidden space-x-2 md:inline-block">
                        <a
                            href="/login"
                            className="px-4 py-2 text-white bg-green-600 rounded-md shadow hover:bg-gray-800 duration-200"
                        >
                            Log in
                        </a>
                        <a
                            href="/signup"
                            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 duration-200"
                        >
                            Sign up
                        </a>
                    </div>
                )}
            </div>
        </nav>
  )
}

export default NavBar

