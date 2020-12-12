import React from 'react';
import {act, render, screen} from '@testing-library/react';
import Tutor from "../component/Tutor";

jest.useFakeTimers();

describe("Tutor", () => {
    test('should contain a stave and a keyboard', () => {
        render(<Tutor/>)

        const staffElement = screen.getByTestId("staff");
        const keyboardElement = screen.getByTestId("keyboard");

        expect(staffElement).toBeInTheDocument();
        expect(keyboardElement).toBeInTheDocument();
    });

    test('should handle change when note played', () => {
        render(<Tutor/>)

        const expectedNote = screen.getByTestId("expected-note");
        const keyToPlay = screen.getByTestId(`key-${expectedNote.textContent}`)

        expect(expectedNote.classList).toContain("ready");

        act(() => {
            keyToPlay.click()
        });

        expect(expectedNote.classList).toContain("good");
    })
})

