import React from 'react';
import { render, screen } from '@testing-library/react';
import Keyboard from "../component/Keyboard";

describe("Keyboard", () => {
    beforeAll(() => {
        mockKeyResponse()
    })

    test('should contain 18 keys', () => {
        render(<Keyboard onNotePlayed={""}/>)

        const linkElement = screen.getByTestId("keyboard");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.children.length).toBe(18)
    });

    test('should execute function when note played', async () => {
        const mockFunction = jest.fn(() => {});
        const result = render(<Keyboard onNotePlayed={mockFunction}/>);

        const key = result.getByTestId("key-c5-white");
        await key.click()

        expect(mockFunction.mock.calls.length).toBe(1);
    });

    function mockKeyResponse() {
        jest.spyOn(window.HTMLMediaElement.prototype, 'play')
            .mockImplementation((): Promise<void> => new Promise<void>(() => {}))
    }
});

