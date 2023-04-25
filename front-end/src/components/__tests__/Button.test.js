// This libary adds a bunch of custom jest matchers that you can use to test the state of the DOM.
// Such as toBeInTheDocument, toBeVisible, toBeDisabled, toBeEmpty, etc.
import React from 'react';
import { render, screen } from '@testing-library/react';
// import  ReactDOM  from 'react-dom';
// import '@testing-library/jest-dom';
import Button from '../Button';

describe("Button", () => {
    test ("renders without crashing", () => {
        render(<Button/>);
    });

    test ("title prop for button works", async () => {
        // render is a function that is made available to us by the @testing-library/react
        // it renders the component and returns a bunch of useful queries
        render(<Button title="Test Button" />);
        // screen is a special object that is made available to us by the @testing-library/react
        // it has a bunch of queries on it, such as findByText so we can find elements by their text content
        // Queries are the methods that Testing Library gives you to find elements on the page
        // we write test button this way because we want to make sure that the text is case insensitive
        const titleButton = await screen.findByText(/Test Button/i);
        expect (titleButton).toBeInTheDocument();
    });

    test("click prop for button works", async () => {
        // Create a mock function to pass to the click prop
        // A mock function is a function that we can check to see if it has been called
        const mockClick = jest.fn();
        // Render the component with the mock function as the click prop
        render(<Button title="Test Button" click={mockClick} />);
        // Find the button by its text content
        const titleButton = await screen.findByText(/Test Button/i);
        // Simulate a click on the button
        titleButton.click();
        // Assert that the mock function is called
        expect(mockClick).toHaveBeenCalled();
    });
});