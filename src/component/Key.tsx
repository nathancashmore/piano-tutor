import React from 'react';

interface Props {
    note: string;
    color: string;
}

const Key: React.FC<Props> = ({note, color}) => {

    async function playSegment(note: string) {
        const audio: HTMLAudioElement = (document.getElementById(note) as HTMLAudioElement);
        audio.currentTime = 0;
        await audio.play();
    }

    return (
        <div data-testid={`key-${note}-${color}`}
            onClick={() => playSegment(note)}
            className={`key ${color} ${note}`}>
            <audio id={note} src={`sound/${note}.mp3`}/>
        </div>
    )
}

export default Key;
