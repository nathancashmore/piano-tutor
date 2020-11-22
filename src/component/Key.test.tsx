import React from 'react';
import { render, screen } from '@testing-library/react';
import Key from './Key';

test('renders a white middle c', () => {
    render(<Key note="c" color="white" onPlay={() => {}}/>)

    const linkElement = screen.getByTestId("key-c-white");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass('white')
    expect(linkElement.firstChild).toBeInstanceOf(HTMLAudioElement)
    expect(linkElement.firstChild).toHaveAttribute('src', "sound/c.mp3")
});

test('renders a black f sharp', () => {
    render(<Key note={'fs'} color={'black'} onPlay={() => {}}/>)

    const linkElement = screen.getByTestId("key-fs-black");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass('black')
    expect(linkElement.firstChild).toBeInstanceOf(HTMLAudioElement)
    expect(linkElement.firstChild).toHaveAttribute('src', "sound/fs.mp3")
});

test('calls onPlay method when clicked', async () => {
    const mockOnPlay = jest.fn();
    const playStub = jest
        .spyOn(window.HTMLMediaElement.prototype, 'play')
        .mockImplementation((): Promise<void> => { return new Promise<void>(() => {})})

    render(<Key note={'fs'} color={'black'} onPlay={mockOnPlay}/>)
    const linkElement = screen.getByTestId("key-fs-black");
    await linkElement.click()

    expect(mockOnPlay.mock.calls.length).toBe(1);
    expect(playStub).toHaveBeenCalled()
    playStub.mockRestore()
})
