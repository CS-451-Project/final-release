import React, {useState, useEffect} from 'react';
import DonateForm from '../components/DonationPageComponents/DonateForm'
import { format } from 'date-fns'
import { useParams } from 'react-router-dom'

const DonationPage = () => {
    const {userId, fundraiserId} = useParams();
    const [fundraiser, setFundraiser] = useState([]);
    const [tags, setTags] = useState([]);

    // Get the fundraiser
    useEffect(() => {
        fetch(`https://localhost:7000/api/fundraiser/${fundraiserId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
        setFundraiser(data);
        setTags(data.tags);
        })

    }, []);

  return (
    <div className='p-16'>
        <DonateForm 
            id = {fundraiser.FundraiserId}
            title={fundraiser.title}
            description={fundraiser.description}
            createdDate={( fundraiser.createdDate != null) ? format(new Date(fundraiser.createdDate), 'MM/dd/yyyy') : "" } 
            // {format(new Date(fundraiser.createdDate), 'MM/dd/yyyy')}
            plannedEndDate={( fundraiser.plannedEndDate != null) ? format(new Date(fundraiser.plannedEndDate), 'MM/dd/yyyy') : "" }
            // tags = {tags}
        />
    </div>
  )
}

export default DonationPage
