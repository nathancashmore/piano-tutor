import React from 'react';
import Key from "./Key";

interface State {}
interface Props {
    onNotePlayed: any
}

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
                    <Key onPlay={this.handleNotePlayed} note={'c'} color={'white'}/>
                    <Key onPlay={this.handleNotePlayed} note={'cs'} color={'black'}/>
                    <Key onPlay={this.handleNotePlayed} note={'d'} color={'white'}/>
                    <Key onPlay={this.handleNotePlayed} note={'ds'} color={'black'}/>
                    <Key onPlay={this.handleNotePlayed} note={'e'} color={'white'}/>
                    <Key onPlay={this.handleNotePlayed} note={'f'} color={'white'}/>
                    <Key onPlay={this.handleNotePlayed} note={'fs'} color={'black'}/>
                    <Key onPlay={this.handleNotePlayed} note={'g'} color={'white'}/>
                    <Key onPlay={this.handleNotePlayed} note={'gs'} color={'black'}/>
                    <Key onPlay={this.handleNotePlayed} note={'a'} color={'white'}/>
                    <Key onPlay={this.handleNotePlayed} note={'as'} color={'black'}/>
                    <Key onPlay={this.handleNotePlayed} note={'b'} color={'white'}/>
                </div>
            </div>
        )
    }
}

export default Keyboard;
