import React from 'react';
import { render, screen } from '@testing-library/react';
import Keyboard from "./Keyboard";

test('should contain 12 keys', () => {
    render(<Keyboard/>)

    const linkElement = screen.getByTestId("keyboard");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.children.length).toBe(12)
});
