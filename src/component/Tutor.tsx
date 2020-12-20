import React from "react";
import Stave from "./Stave";
import Keyboard, {keys} from "./Keyboard";
import Hint from "./Hint";

interface Props {}
interface State {
    expectedNote: string
    notePlayed: string | undefined
}

class Tutor extends React.Component<Props, State> {
    timerID!: NodeJS.Timeout;

    constructor(props: Props) {
        super(props);
        this.handleNotePlayed = this.handleNotePlayed.bind(this)
        this.checkState = this.checkState.bind(this)

        const initialNote = this.getRandomKey().note
        console.log(`Initial note set to ${initialNote}`)
        this.state = {expectedNote: initialNote, notePlayed: undefined};
    }

    checkState() {
        console.log("Checking if note needs replacing...")
        if (this.state.expectedNote === this.state.notePlayed) {
            this.setState({expectedNote: this.getRandomKey().note, notePlayed: undefined});
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.checkState(), 4000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    handleNotePlayed(note: string) {
        console.log(`Tutor heard the note : ${note} : Looking for ${this.state.expectedNote}`)
        this.setState({notePlayed: note})
    }

    getRandomKey() {
        return keys[keys.length * Math.random() | 1]
    }

    render() {
        return (
            <>
                <Stave expectedNote={this.state.expectedNote} playedNote={this.state.notePlayed}/>
                <Hint expectedNote={this.state.expectedNote} notePlayed={this.state.notePlayed}/>
                <Keyboard onNotePlayed={this.handleNotePlayed}/>
            </>
        )
    }
}

export default Tutor;
