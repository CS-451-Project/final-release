import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PicHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='bg-homePagePic bg-cover h-100 bg-top bg-fixed'>
            {/* <div className='bg-gradient-to-t from-black h-100'></div> */}
            <div className=' bg-gradient-to-t from-black pb-16 h-100'>
                <div className='flex justify-center pb-8' data-testid="button-test-id">
                    
                </div>
                <div className='flex justify-center flex-col p-4 font-headingTest font-semibold text-black h-full '>
                    <div className='flex justify-center pb-16 pt-48'>
                        <button 
                            className="bg-green-600 text-white py-2 px-4 hover:bg-green-700 duration-200 rounded-lg text-lg"  
                            onClick={localStorage.length === 0 ? 
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
                                () => navigate("/createFundraiser")}
                        >
                            Create Fundraiser
                        </button>
                    </div>
                    
                    <h1 className='text-center text-5xl text-white'>
                        Make a difference in someone's life
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PicHeader