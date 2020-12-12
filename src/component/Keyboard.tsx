import React from 'react';
import Key from "./Key";

interface State {}
interface Props {
    onNotePlayed: any
}

export const keys = [
    { note : 'd4', color : 'white' },
    { note : 'ds4', color : 'black' },
    { note : 'e4', color : 'white' },
    { note : 'f4', color : 'white' },
    { note : 'fs4', color : 'black' },
    { note : 'g4', color : 'white' },
    { note : 'gs4', color : 'black' },
    { note : 'a4', color : 'white' },
    { note : 'as4', color : 'black' },
    { note : 'b4', color : 'white' },
    { note : 'c5', color : 'white' },
    { note : 'cs5', color : 'black' },
    { note : 'd5', color : 'white' },
    { note : 'ds5', color : 'black' },
    { note : 'e5', color : 'white' },
    { note : 'f5', color : 'white' },
    { note : 'fs5', color : 'black' },
    { note : 'g5', color : 'white' }
]

class Keyboard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleNotePlayed = this.handleNotePlayed.bind(this)
    }

    handleNotePlayed(note: string) {
        this.props.onNotePlayed(note)
    }

    render() {
        return(
            <div className="keyboard-container">
                <div data-testid={"keyboard"} className="keyboard">
                    { keys.map((key, idx) => {
                        return (<Key key={idx} onPlay={this.handleNotePlayed} note={key.note} color={key.color}/>)
                    })}
                </div>
            </div>
        )
    }
}

export default Keyboard;
