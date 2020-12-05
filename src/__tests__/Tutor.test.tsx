import React from 'react';
import { render, screen } from '@testing-library/react';
import Tutor from "../component/Tutor";

describe("Tutor", () => {
    test('should contain a stave and a keyboard', () => {
        render(<Tutor/>)

        const staffElement = screen.getByTestId("staff");
        const keyboardElement = screen.getByTestId("keyboard");

        expect(staffElement).toBeInTheDocument();
        expect(keyboardElement).toBeInTheDocument();
    });

    test('should reset state when correct note played', () => {
        render(<Tutor/>, )

        // Set initial state to have specific expectedNote

        // click the appropriate note

        // Check to see the expected note has changed

    })
})

