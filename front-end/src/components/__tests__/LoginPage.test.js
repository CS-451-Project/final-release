import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../../pages/LoginPage';
import LoginWindow from '../LoginWindow';
import { BrowserRouter as Router } from 'react-router-dom';

describe('LoginPage', () => {
    const { queryAllByTestId } = render(
        <Router>
            <LoginPage />
        </Router>
    );
    test('renders the login page', () => {
        const textElement = screen.getByText(/Login/i);
        expect(textElement).toBeInTheDocument();
    });

    test('check if login window is rendered in login page', () => {
        expect(queryAllByTestId('window-id')).toBeTruthy();
    });
});

describe('LoginWindow', () => {
    
    test('renders the login window', () => {
        render(
            <Router>
                <LoginWindow/>
            </Router>
        );
        
        // expect the title to be in the document
        expect(screen.getByRole('heading', { name: "Login" })).toBeInTheDocument();
        
        // user fills out email input
        fireEvent.change(screen.getByRole('textbox', { name: "" }), {
            persist: jest.fn(),
            target: { name: "", value: "azdummy@gmail.com" }
        });
        expect(screen.getByRole('textbox', { name: "" })).toHaveValue("azdummy@gmail.com");

        // user fills out password input
        fireEvent.change(screen.getByRole('textbox', { name: "" }), {
            persist: jest.fn(),
            target: { name: "", value: "test" }
        });
        expect(screen.getByRole('textbox', { name: "" })).toHaveValue("test");

        // user clicks login button
        fireEvent.click(screen.getByRole('button', { name: "Log In" }));
        fireEvent.click(screen.getByRole('button', { name: "Log In" }), {
            persist: jest.fn()
        });
    });

    test('Go to sign up page if user does not have an account', () => {
        render(
            <Router>
                <LoginWindow/>
            </Router>
        );

        fireEvent.click(screen.getByRole('button', { name: "Create Account" }));
    });

    test('User forgot password', () => {
        render(
            <Router>
                <LoginWindow/>
            </Router>
        );
        
        fireEvent.click(screen.getByRole('link', { name: "Forgot Password?" }));
    });

});

