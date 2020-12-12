import React from 'react';
import {render, screen} from '@testing-library/react';
import Hint from '../component/Hint';

describe("Hint", () => {
    test('renders hint before assessment', () => {
        render(<Hint expectedNote={"c5"} notePlayed={undefined}/>)
        expect(screen.getByTestId("hint-default-note-message")).toBeInTheDocument()
        expect(screen.getByTestId("hint-expected-note")).toHaveTextContent("c5")
    });

    test('renders hint after expected note has been played', () => {
        render(<Hint expectedNote={"c5"} notePlayed={"c5"}/>)
        expect(screen.getByTestId("hint-default-note-message")).toBeInTheDocument()
        expect(screen.getByTestId("hint-expected-note")).toHaveTextContent("c5")
    });

    test('renders hint after wrong note has been played', () => {
        render(<Hint expectedNote={"c5"} notePlayed={"c6"}/>)
        expect(screen.getByTestId("hint-bad-note-message")).toBeInTheDocument()
        expect(screen.getByTestId("hint-expected-note")).toHaveTextContent("c5")
        expect(screen.getByTestId("hint-bad-note-message")).toHaveTextContent("c6")
    });
})
