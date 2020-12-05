import React from 'react';
import {render, screen} from '@testing-library/react';
import Hint from '../component/Hint';

describe("Hint", () => {
    test('renders hint before assessment', () => {
        render(<Hint assessment={"ready"} expectedNote={"c5"} notePlayed={undefined}/>)
        expect(screen.getByTestId("default-note-message")).toBeInTheDocument()
        expect(screen.getByTestId("expected-note")).toHaveTextContent("c5")
    });

    test('renders hint after good assessment', () => {
        render(<Hint assessment={"good"} expectedNote={"c5"} notePlayed={"c5"}/>)
        expect(screen.getByTestId("default-note-message")).toBeInTheDocument()
        expect(screen.getByTestId("expected-note")).toHaveTextContent("c5")
    });

    test('renders hint after bad assessment', () => {
        render(<Hint assessment={"bad"} expectedNote={"c5"} notePlayed={"d5"}/>)
        expect(screen.getByTestId("bad-note-message")).toBeInTheDocument()
        expect(screen.getByTestId("expected-note")).toHaveTextContent("c5")
        expect(screen.getByTestId("bad-note-message")).toHaveTextContent("c5")
    });
})
