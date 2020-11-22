import React from "react";
import Stave from "./Stave";
import Keyboard from "./Keyboard";

interface Props {}

interface State {
    expectedNote: string
    notePlayed: string | undefined
}

class Tutor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleNotePlayed = this.handleNotePlayed.bind(this)
        this.state = {expectedNote : 'c5', notePlayed : undefined};
    }

    handleNotePlayed(note: string) {
        console.log(`Tutor heard the note : ${note}` )

        if (this.state.expectedNote.includes(note)) {
            this.setState({expectedNote: 'a5'})
            this.setState({notePlayed: undefined})
            console.log(`Tutor changed the expected note to : 'a5'` )
        } else {
            this.setState({notePlayed: note})
        }
    }

    getNoteStatus(){
        if(this.state.notePlayed === undefined) {
            return ''
        }

        if (this.state.expectedNote.includes(this.state.notePlayed)) {
            return 'good'
        } else {
            return 'bad'
        }

    }

    render() {
        return (
            <>
            <Stave note={this.state.expectedNote} status={this.getNoteStatus()}/>
            <Keyboard onNotePlayed={this.handleNotePlayed}/>
            </>
        )
    }
}

export default Tutor;
