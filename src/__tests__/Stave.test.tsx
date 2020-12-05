import React from 'react';
import { render, screen } from '@testing-library/react';
import Stave from "../component/Stave";

describe("Stave", () => {
    test('should render stave with appropriate note', () => {
        render(<Stave expectedNote={'c5'} playedNote={undefined}/>)

        const mainElement = screen.getByTestId("staff");
        expect(mainElement).toBeInTheDocument();

        const expectedNote = mainElement.getElementsByClassName("c5 ready")[0];
        expect(expectedNote).toBeInTheDocument();
    });

    test('should render wrong note if provided', () => {
        render(<Stave expectedNote={'c5'} playedNote={'c6'}/>)

        const mainElement = screen.getByTestId("staff");
        expect(mainElement).toBeInTheDocument();

        const expectedNote = mainElement.getElementsByClassName("c5 ready")[0]
        const wrongNote = mainElement.getElementsByClassName("c6 bad")[0];

        expect(wrongNote).toBeInTheDocument();
        expect(expectedNote).toBeInTheDocument();
    })

    test('should render green expected note if its been played', () => {
        render(<Stave expectedNote={'c5'} playedNote={'c5'}/>)

        const mainElement = screen.getByTestId("staff");
        expect(mainElement).toBeInTheDocument();

        const expectedNote = mainElement.getElementsByClassName("c5 good")[0];
        const wrongNote = mainElement.getElementsByClassName("c5 bad");
        expect(expectedNote).toBeInTheDocument();
        expect(wrongNote.length).toBe(0);
    })

});
