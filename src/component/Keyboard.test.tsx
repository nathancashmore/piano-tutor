import React from 'react';
import { render, screen } from '@testing-library/react';
import Keyboard from "./Keyboard";

test('should contain 22 keys', () => {
    render(<Keyboard onNotePlayed={""}/>)

    const linkElement = screen.getByTestId("keyboard");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.children.length).toBe(22)
});
