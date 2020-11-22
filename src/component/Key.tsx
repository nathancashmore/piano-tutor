import React from 'react';

interface Props {
    note: string;
    color: string;
    onPlay: any;
}

class Key extends React.Component<Props> {

    async playSegment(note: string) {
        await this.props.onPlay(note)
        const audio: HTMLAudioElement = (document.getElementById(note) as HTMLAudioElement);
        audio.currentTime = 0;
        await audio.play();
    }

    render() {
        return(
            <div data-testid={`key-${this.props.note}-${this.props.color}`}
                 onClick={() => this.playSegment(this.props.note)}
                 className={`key ${this.props.color} ${this.props.note}`}>
                <audio id={this.props.note} src={`sound/${this.props.note}.mp3`}/>
            </div>
        )
    }

}

export default Key;
