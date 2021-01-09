import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Hint from '../component/Hint';

describe("Hint", () => {
    test('renders hint before assessment', () => {
        render(<Hint expectedNote={"c5"} notePlayed={undefined} />, )
        clickToggle()
        expect(screen.getByTestId("hint-expected-note")).toHaveTextContent("C")
    });

    test('renders hint after expected note has been played', () => {
        render(<Hint expectedNote={"c5"} notePlayed={"c5"}/>)
        clickToggle()
        expect(screen.getByTestId("hint-expected-note")).toHaveTextContent("C")
    });

    test('renders hint after wrong note has been played', () => {
        render(<Hint expectedNote={"c5"} notePlayed={"c6"}/>)
        clickToggle()
        expect(screen.getByTestId("hint-bad-note-message")).toBeInTheDocument()
        expect(screen.getByLabelText('c5')).toBeInTheDocument()
        expect(screen.getByLabelText('c6')).toBeInTheDocument()
        expect(screen.getByTestId("hint-expected-note")).toHaveTextContent("C")
        expect(screen.getByTestId("hint-bad-note-message")).toHaveTextContent("C")
    });

    test('hint not displayed by default', async () => {
        render(<Hint expectedNote={"c5"} notePlayed={undefined}/>)
        expect(screen.queryByTestId("hint-expected-note")).toBeNull()
    })

    test('renders only the note not the number', () => {
        render(<Hint expectedNote={"c5"} notePlayed={undefined}/>)
        clickToggle()
        expect(screen.getByTestId("hint-expected-note")).toHaveTextContent("C")
        expect(screen.getByTestId("hint-expected-note")).not.toHaveTextContent("5")
    })

    test('renders a sharp symbol', () => {
        render(<Hint expectedNote={"cs5"} notePlayed={undefined}/>)
        clickToggle()
        expect(screen.getByTestId("hint-expected-note")).toHaveTextContent("C#")
    })

    function clickToggle() {
        fireEvent.click(screen.getByTestId('hint-toggle').firstChild as HTMLInputElement)
    }
})
