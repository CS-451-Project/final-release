import { render, screen, fireEvent } from '@testing-library/react';
import DonateForm from '../DonationPageComponents/DonateForm';
import DonationPage from '../../pages/DonationPage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('DonatePage', () => {
    test('renders the donate page', () => {
        render(
            <Router>
                <DonationPage />
            </Router>
        );
    });
});

describe('DonateWindow', () => {
    // test user filling out the form
    test('renders the donate window', () => {
        render(
            <Router>
                <DonateForm
                    id = {"fundraiserId"}
                    title={"fundraiserTitle"}
                    description={"fundraiserDescription"}
                    createdDate={"12/12/2020"} 
                    plannedEndDate={"12/30/2020"}
                />
            </Router>
        );

        // expect the title to be in the document
        expect(screen.getByText('Help make a difference')).toBeInTheDocument();


        // user fills out donate input
        fireEvent.change(screen.getByRole('spinbutton', { name: "$" }), {
            persist: jest.fn(),
            target: { name: "$", value: 14.99 }
        });
        expect(screen.getByRole('spinbutton', { name: "$" })).toHaveValue(14.99);

        // user fills out message input
        fireEvent.change(screen.getByRole('textbox', { name: "" }), {
            persist: jest.fn(),
            target: { name: "", value: "test Message" }
        });
        expect(screen.getByRole('textbox', { name: "" })).toHaveValue("test Message");

        // expect the title to be in the document
        expect(screen.getByText('Payment Information')).toBeInTheDocument();

        // user fills out card name input
        fireEvent.change(screen.getByRole('textbox', { name: "Name on Card" }), {
            persist: jest.fn(),
            target: { name: "Name on Card", value: "John Doe" }
        });
        expect(screen.getByRole('textbox', { name: "Name on Card" })).toHaveValue("John Doe");

        // user fills out card number input
        fireEvent.change(screen.getByRole('textbox', { name: "Card Number" }), {
            persist: jest.fn(),
            target: { name: "Card Number", value: "1234 1234 1234 1234" }
        });
        expect(screen.getByRole('textbox', { name: "Card Number" })).toHaveValue("1234 1234 1234 1234");

        // user fills out security code input
        fireEvent.change(screen.getByRole('spinbutton', { name: "Security Code" }), {
            persist: jest.fn(),
            target: { name: "Security Code", value: 123 }
        });
        expect(screen.getByRole('spinbutton', { name: "Security Code" })).toHaveValue(123);

        // user fills out expiration date input
        fireEvent.change(screen.getByRole('textbox', { name: "Expiration Date" }), {
            persist: jest.fn(),
            target: { name: "Expiration Date", value: "12 / 34" }
        });
        expect(screen.getByRole('textbox', { name: "Expiration Date" })).toHaveValue("12 / 34");

        // user fills out zip code input
        fireEvent.change(screen.getByRole('spinbutton', { name: "Zip Code" }), {
            persist: jest.fn(),
            target: { name: "Zip Code", value: 12345 }
        });
        expect(screen.getByRole('spinbutton', { name: "Zip Code" })).toHaveValue(12345);

        // user clicks donate button
        fireEvent.click(screen.getByRole('button', { name: "Donate" }));
        fireEvent.click(screen.getByRole('button', { name: "Donate" }), {
            persist: jest.fn()
        });

    });

    // test user clicking the back button
    test('user does not donate and goes back', () => {
        render(
            <Router>
                <DonateForm
                    id = {"fundraiserId"}
                    title={"fundraiserTitle"}
                    description={"fundraiserDescription"}
                    createdDate={"12/12/2020"} 
                    // {format(new Date(fundraiser.createdDate), 'MM/dd/yyyy')}
                    plannedEndDate={"12/30/2020"}
                />
            </Router>
        );

        expect(screen.getByText('Help make a difference')).toBeInTheDocument();

        // user clicks back button
        fireEvent.click(screen.getByRole('button', { name: "Back" }));
        fireEvent.click(screen.getByRole('button', { name: "Back" }), {
            persist: jest.fn()
        });
    });

});