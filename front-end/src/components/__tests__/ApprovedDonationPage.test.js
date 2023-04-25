import { render, screen, fireEvent } from '@testing-library/react';
import ApprovedDonationPage from '../../pages/ApprovedDonationPage';
import ApprovedDonationWindow from '../ApprovedDonationPageComponents/ApprovedDonationWindow';
import { BrowserRouter as Router } from 'react-router-dom';

describe('ApprovedDonationPage', () => {
    test('renders the approved donation window', () => {
        render(
            <Router>
                <ApprovedDonationWindow />
            </Router>

        );
    });

    test('go back to fundraiser page', () => {
        render(
            <Router>
                <ApprovedDonationWindow />
            </Router>

        );
        fireEvent.click(screen.getByRole('button', { name: "Return to Fundraiser" }));
        fireEvent.click(screen.getByRole('button', { name: "Return to Fundraiser" }), {
            persist: jest.fn()
        });
    });
});