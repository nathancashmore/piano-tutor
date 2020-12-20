import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Hint from '../component/Hint';

describe("Hint", () => {
    test('renders hint before assessment', () => {
        render(<Hint expectedNote={"c5"} notePlayed={undefined} />, )
        clickToggle()
        expect(screen.getByTestId("hint-expected-note")).toHaveTextContent("c5")
    });

    test('renders hint after expected note has been played', () => {
        render(<Hint expectedNote={"c5"} notePlayed={"c5"}/>)
        clickToggle()
        expect(screen.getByTestId("hint-expected-note")).toHaveTextContent("c5")
    });

    test('renders hint after wrong note has been played', () => {
        render(<Hint expectedNote={"c5"} notePlayed={"c6"}/>)
        clickToggle()
        expect(screen.getByTestId("hint-bad-note-message")).toBeInTheDocument()
        expect(screen.getByTestId("hint-expected-note")).toHaveTextContent("c5")
        expect(screen.getByTestId("hint-bad-note-message")).toHaveTextContent("c6")
    });

    test('hint not displayed by default', async () => {
        render(<Hint expectedNote={"c5"} notePlayed={undefined}/>)
        expect(screen.queryByTestId("hint-expected-note")).toBeNull()
    })

    function clickToggle() {
        fireEvent.click(screen.getByTestId('hint-toggle').firstChild as HTMLInputElement)
    }
})
