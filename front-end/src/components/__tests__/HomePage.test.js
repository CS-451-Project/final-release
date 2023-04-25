import { render, screen } from '@testing-library/react';
import { format } from 'date-fns'
import HomePage from '../../pages/HomePage';
import FundraiserCarousel from '../HomePageComponents/FundraiserCarousel';
import FundraiserDisplaySection from '../HomePageComponents/FundraiserDisplaySection';
import FeatFundraiser from '../HomePageComponents/FeatFundraiser';
import { BrowserRouter as Router } from 'react-router-dom';

const testData = [
    {
        "fundraiserId": "1",
        "title": "Fundraiser 1",
        "goalTargetAmount": 1000,
        "description": "This is a fundraiser for a good cause",
        "createdDate": "2021-01-01",
        "goalReachedDate": "2021-01-01",
        "plannedEndDate": "2021-01-01",
        "tags": [
            "tag1",
            "tag2"
        ]
    },
    {
        "fundraiserId": "2",
        "title": "Fundraiser 2",
        "goalTargetAmount": 1000,
        "description": "This is a fundraiser for a good cause",
        "createdDate": "2021-01-01",
        "goalReachedDate": "2021-01-01",
        "plannedEndDate": "2021-01-01",
        "tags": [
            "tag1",
            "tag2"
        ]
    },
    {
        "fundraiserId": "3",
        "title": "Fundraiser 3",
        "goalTargetAmount": 1000,
        "description": "This is a fundraiser for a good cause",
        "createdDate": "2021-01-01",
        "goalReachedDate": "2021-01-01",
        "plannedEndDate": "2021-01-01",
        "tags": [
            "tag1",
            "tag2"
        ]
    },
    {
        "fundraiserId": "4",
        "title": "Fundraiser 4",
        "goalTargetAmount": 1000,
        "description": "This is a fundraiser for a good cause",
        "createdDate": "2021-01-01",
        "goalReachedDate": "2021-01-01",
        "plannedEndDate": "2021-01-01",
        "tags": [
            "tag1",
            "tag2"
        ]
    }
]


// This test describes the Home Page
describe("Home Page", () => {
    render(
        <Router>
            <HomePage/>
        </Router>
    );
    // Using test.only will only run this test
    // using test.skip will skip this test

    test('Home page title', () => {
        
        const textElement = screen.getByText(/Make a difference in someone's life/i);
        expect(textElement).toBeInTheDocument();
    });

    test('Render Home page components', () => {
        const { queryAllByTestId } = render(<Router><HomePage/></Router>);
        // This assertion if there are the child components with the test id names
        expect(queryAllByTestId('button-test-id')).toBeTruthy();
        expect(queryAllByTestId('feat-fundraiser-test-id')).toBeTruthy();
        expect(queryAllByTestId('carousel-test-id')).toBeTruthy();
    });

    // Checks if the useEffect is called and the mock fetch is called
    test('useEffect fetch', () => {
        // This test checks if the useEffect is called  
        const fakeResponse = 'mock.api';
        const mockFetch = Promise.resolve({json: () => Promise.resolve(fakeResponse)});
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetch);
    });
});

// This test describes the Carousel Slides inside the homepage
describe("Featured fundraiser", () => {
    // data-testid='link-to-fundraiser'
    test('render the featured fundraiser', () => {
        // This test checks if the carousel is rendered
        const { queryAllByTestId } = render(<Router><FeatFundraiser data = {testData}/></Router>);
        // This assertion if there is the link component with the test id 'link-to-fundraiser'
        expect(queryAllByTestId('link-to-fundraiser')).toBeTruthy();
    });
});

// This test describes the Carousel Slides inside the homepage
describe("Carousel Slides and the display section", () => {
    test('render the carousel', () => {
        // This test checks if the carousel is rendered
        const { queryAllByTestId } = render(<Router><FundraiserCarousel data = {testData}/></Router>);
        // This assertion if there is the link component with the test id 'link-to-fundraiser'
        expect(queryAllByTestId('link-to-fundraiser')).toBeTruthy();
        // This assertion checks if there is a child compoenent of displaying the fundraiser information
        // ('fundraiser-section-id' is in the FundraiserDisplaySection div I added as test id)
        expect(queryAllByTestId('fundraiser-section-id')).toBeTruthy();
    });

    test('render display section', () => {
        render(
            <Router>
                <FundraiserDisplaySection 
                    id = {1}
                    title = {"Mock Fundraiser"}
                    goalTargetAmount = {1000}
                    description = {"This is a fundraiser for a good cause"}
                    createdDate = {format(new Date(), 'MM/dd/yyyy')}
                    goalReachedDate = {format(new Date(), 'MM/dd/yyyy')}
                    plannedEndDate = {format(new Date(), 'MM/dd/yyyy')}
                    tags = {["tag1","tag2"]}
                />
            </Router>
        
        );
        // This assertion checks if the title is rendered
        const textElement = screen.getByText(/Mock Fundraiser/i);
        expect(textElement).toBeInTheDocument(); 
    });
});

