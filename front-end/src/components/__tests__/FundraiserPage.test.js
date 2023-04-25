import { render, screen } from '@testing-library/react';
import Fundraiser from '../FundraiserPageComponents/Fundraiser';
import FundraiserPage from '../../pages/FundraiserPage';
import DonateArea from '../FundraiserPageComponents/DonateArea';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Fundraiser Page", () => {
    render(
        <Router>
            <FundraiserPage />
        </Router>
    );

    // Checks if the useEffect is called and the mock fetch is called
    test('useEffect fetch', () => {
        // This test checks if the useEffect is called  
        const fakeResponse = 'mock.api';
        const mockFetch = Promise.resolve({json: () => Promise.resolve(fakeResponse)});
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetch);
    });
})

describe("Render fundraiser component", () => {
    render(
        <Router>
            <Fundraiser
                title={"Test fundraiser"}
                description={"This is the best description ever"}
                createdDate={"2021-23-11"} 
                plannedEndDate={"2021-01-01"}
                tags = {["tag1", "tag2"]}
                organizerName={"Albus Dingledore"}
                organizerEmail={"ADizzy@harryTotter.com"}
            />
        </Router>
    
    );
    
    const fundraiserTitleText = screen.getByText(/Test fundraiser/i);
    expect(fundraiserTitleText).toBeInTheDocument();

    const fundraiserDescriptionText = screen.getByText(/This is the best description ever/i);
    expect(fundraiserDescriptionText).toBeInTheDocument();
})

describe("Render donate area component", () => {
    render(
        <Router>
            <DonateArea
                currentBalance = {1000.00}
                goalAmount = {2000.00}
            />
        </Router>
    
    );

    const donationAmount = screen.getByText(/2,000/i)
    expect(donationAmount).toBeInTheDocument();
})