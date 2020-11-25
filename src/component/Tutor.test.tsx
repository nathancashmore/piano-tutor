import React from 'react';
import { render, screen } from '@testing-library/react';
import Tutor from "./Tutor";

test('should contain a stave and a keyboard', () => {
    render(<Tutor/>)

    const staffElement = screen.getByTestId("staff");
    const keyboardElement = screen.getByTestId("keyboard");

    expect(staffElement).toBeInTheDocument();
    expect(keyboardElement).toBeInTheDocument();
});

