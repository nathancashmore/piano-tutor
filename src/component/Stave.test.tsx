import React from 'react';
import { render, screen } from '@testing-library/react';
import Stave from "./Stave";

describe("Stave", () => {
    test('should render stave with appropriate note', () => {
        render(<Stave note={'c5'} status={'ready'}/>)

        const mainElement = screen.getByTestId("staff");
        const note = mainElement.getElementsByClassName("c5 ready")[0];
        expect(mainElement).toBeInTheDocument();
        expect(note).toBeInTheDocument();
    });
});
