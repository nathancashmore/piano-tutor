import React from 'react';
import { render, screen } from '@testing-library/react';
import Key from './Key';

test('renders a white middle c', () => {
    render(<Key note={'c'} color={'white'}/>)

    const linkElement = screen.getByTestId("key-c-white");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass('white')
    expect(linkElement.firstChild).toBeInstanceOf(HTMLAudioElement)
    expect(linkElement.firstChild).toHaveAttribute('src', "sound/c.mp3")
});

test('renders a black f sharp', () => {
    render(<Key note={'fs'} color={'black'}/>)

    const linkElement = screen.getByTestId("key-fs-black");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass('black')
    expect(linkElement.firstChild).toBeInstanceOf(HTMLAudioElement)
    expect(linkElement.firstChild).toHaveAttribute('src', "sound/fs.mp3")
});