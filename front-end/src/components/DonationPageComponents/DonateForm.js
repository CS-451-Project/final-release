import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const DonateWindow = (props) => {
    var base64 = require('base-64');
    const {userId, fundraiserId} = useParams();
    const navigate = useNavigate()
    // const [donateValue, setDonateValue] = useState('')
    const [Amount, setAmount] = useState(null)
    const [Message, setMessage] = useState('')
    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardExpiry, setCardExpiry] = useState('')
    const [cardCVC, setCardCVC] = useState('')
    const [cardZip, setCardZip] = useState('')

    const handleSubmit = (e) => {
        // the e.preventDefault() is to prevent the page from refreshing
        e.preventDefault()

        let donate = { fundraiserId, Amount, Message };
        console.log(donate)

        if(localStorage.length === 0){
            fetch(`https://localhost:7000/api/donation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donate)
            })
            // head
            .then(response => {
                console.log(response)
                navigate(`/approved`)
            })
        }
        else if(localStorage.length > 0){
            console.log(localStorage.getItem("AuthHeader"))
            fetch(`https://localhost:7000/api/user/${localStorage.getItem("userId")}/donation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Basic ${base64.encode(`${localStorage.getItem("AuthHeader")}`)}`
            },
            body: JSON.stringify(donate)
            })
            // head
            .then(response => {
                console.log(response)
                navigate(`/approved`)
            })
        }

        
    }

    function cc_format_number(value) {
        const v = value
        // Remove all non-digit characters
            // this first replace is to remove all spaces
            .replace(/\s+/g, "")
            // this second replace is to remove all non-digit characters
            .replace(/\D/g, "")
            // this third replace is to limit the length to 16 characters
            .substr(0, 16);
        const parts = [];

        // Split into 4 character chunks
        for (let i = 0; i < v.length; i += 4) {
            parts.push(v.substr(i, 4));
        }

        return parts.length > 1 ? parts.join(" ") : value;
    }

    function cc_format_expdate(value){
        const v = value
        // Remove all non-digit characters
            .replace(/\s+/g, "")
            .replace(/\D/g, "")
            .substr(0, 4);
        const parts = [];

        // Split into 2 character chunks
        for (let i = 0; i < v.length; i += 2) {
            parts.push(v.substr(i, 2));
        }

        // THis 
        return parts.length > 1 ? parts.join(" / ") : value;
    }


  return (
    
    <div className='bg-gray-100 rounded p-4'>
        <div className='text-2xl font-bold '>
            You are supporting {props.title}
            <div className='text-sm italic font-normal'>You have until {props.plannedEndDate} to support the cause</div>
        </div>
        <div className='flex justify-center text-3xl pt-6'>
            Help make a difference
        </div>
        <form onSubmit={handleSubmit} >
            <div className='flex  p-4 justify-center border-b'>
                <div className='flex flex-col relative'>
                    <label className='flex justify-center'>
                        <div className='absolute top-4 left-3 font-bold text-3xl'>$</div>
                            <input
                                className='border-2 border-gray-300 p-4 rounded-lg text-right text-3xl w-48' 
                                type="number"
                                step="0.01"
                                min="1" 
                                maxLength={3}
                                value={Amount}
                                onChange={(e) => {
                                    const newValue = e.target.value.slice(0, 8);
                                    setAmount(newValue)
                                }}
                                name='donationAmount' 
                                placeholder='0.00'
                                required
                            />
                    </label>
                    <textarea 
                        className='border-2 border-gray-300 p-2 rounded-lg w-full h-48 mt-2' 
                        type="text" 
                        name='donationMessage' 
                        value={Message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Leave a message'
                        required 
                        />
                </div>
            </div>
            <div className='text-4xl flex justify-center py-6'>
                Payment Information
            </div>
            <div className=''>
                <div className='flex flex-wrap w-full py-4 justify-center'>
                    <label className='md:w-1/2 '>
                        <div className='text-xl md:pl-48'>Name on Card</div>
                        <div className='md:pl-48'>
                            
                            <input
                                className='border-2 border-gray-300 p-2 rounded-lg md:w-1/2'
                                type="text" 
                                name='cardName'
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                placeholder='Full Name'
                                required
                            />
                        </div>
                        
                    </label>
                    <label className='md:w-1/2 '>
                        <div className='text-xl md:pl-16'>Card Number</div>
                        <div className='md:pl-16'>
                            <input
                                className='border-2 border-gray-300 p-2 rounded-lg md:w-1/2'
                                type="text"
                                name='cardName'
                                value={cc_format_number(cardNumber)}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder='XXXX XXXX XXXX XXXX'
                                required
                            />
                        </div>
                        
                    </label>
                </div>
                <div className='flex flex-wrap w-full py-4 justify-center'>
                    
                    <label className='md:w-1/2 '>
                        <div className='text-xl md:pl-48'>Security Code</div>
                        <div className='md:pl-48'>
                            <input
                                className='border-2 border-gray-300 p-2 rounded-lg md:w-1/2'
                                type="number"
                                name='cardCVC'
                                maxLength={3}
                                value={cardCVC}
                                onChange={(e) => {
                                    if (e.target.value.length < 4) {
                                        setCardCVC(e.target.value)
                                    }
                                }}
                                placeholder='CVC'
                                required
                            />
                        </div>
                        
                    </label>
                    <label className='md:w-1/2'>
                        <div className='text-xl md:pl-16'>Expiration Date</div>
                        <div className='md:pl-16'>
                            <input
                                className='border-2 border-gray-300 p-2 rounded-lg md:w-1/2'
                                type="text"
                                name='cardExpiry'
                                value={cc_format_expdate(cardExpiry)}
                                onChange={(e) => setCardExpiry(e.target.value)}
                                placeholder='MM/YY'
                                required
                            />
                        </div>
                        
                    </label>
                </div>

                <div className='flex flex-wrap w-full py-4 md:justify-start justify-center'>
                    
                    <label className='md:w-1/2'>
                        <div className='text-xl md:pl-48'>Zip Code</div>
                        <div className='md:pl-48'>
                            <input
                                className='border-2 border-gray-300 p-2 rounded-lg md:w-1/2'
                                type="number"
                                name='cardZip'
                                maxLength="5"
                                value={cardZip}
                                onChange={(e) => {
                                    if (e.target.value.length < 6) {
                                        setCardZip(e.target.value)
                                    }
                                }}
                                placeholder='Zip Code'
                                required
                            />
                        </div>
                        
                    </label>
                </div>
            </div>

            <div className='flex flex-wrap p-4 justify-between'>
                <button className='bg-gray-500 text-white p-2 rounded-lg' onClick={() => navigate(-1)}>Back</button>
                <button className='p-4 border rounded-lg text-white bg-green-500 hover:bg-green-600 duration-200'>Donate</button>
            </div>
        </form>
    </div>
  )
}

export default DonateWindow