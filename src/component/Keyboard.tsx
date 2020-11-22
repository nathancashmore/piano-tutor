import React from 'react';
import Key from "./Key";

interface State {}
interface Props {
    onNotePlayed: any
}

export const keys = [
    { note : 'c', color : 'white' },
    { note : 'cs', color : 'black' },
    { note : 'd', color : 'white' },
    { note : 'ds', color : 'black' },
    { note : 'e', color : 'white' },
    { note : 'f', color : 'white' },
    { note : 'fs', color : 'black' },
    { note : 'g', color : 'white' },
    { note : 'gs', color : 'black' },
    { note : 'a', color : 'white' },
    { note : 'as', color : 'black' },
    { note : 'b', color : 'white' },
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
