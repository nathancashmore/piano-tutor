import React from 'react';
import { render, screen } from '@testing-library/react';
import Stave from "../component/Stave";

describe("Stave", () => {
    test('should render stave with appropriate note', () => {
        render(<Stave note={'c5'} status={'ready'} wrongNote={undefined}/>)

        const mainElement = screen.getByTestId("staff");
        const note = mainElement.getElementsByClassName("c5 ready")[0];
        expect(mainElement).toBeInTheDocument();
        expect(note).toBeInTheDocument();
    });

    test('should render wrong note if provided', () => {
        render(<Stave note={'c5'} status={'ready'} wrongNote={'c6'}/>)

        const mainElement = screen.getByTestId("staff");
        const note = mainElement.getElementsByClassName("c6 bad")[0];
        expect(mainElement).toBeInTheDocument();
        expect(note).toBeInTheDocument();
    })

    test('should render green expected note if status is good', () => {
        render(<Stave note={'c5'} status={'good'} wrongNote={undefined}/>)

        const mainElement = screen.getByTestId("staff");
        const note = mainElement.getElementsByClassName("c5 good")[0];
        expect(mainElement).toBeInTheDocument();
        expect(note).toBeInTheDocument();
    })

});
