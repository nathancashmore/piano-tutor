import React from "react";
import Stave from "./Stave";
import Keyboard, {keys} from "./Keyboard";
import Hint from "./Hint";

interface Props {}

interface State {
    expectedNote: string
    notePlayed: string | undefined
    assessment: string
}

class Tutor extends React.Component<Props, State> {
    timerID!: NodeJS.Timeout;

    constructor(props: Props) {
        super(props);
        this.handleNotePlayed = this.handleNotePlayed.bind(this)

        const initialNote = this.getRandomKey().note
        console.log(`Initial note set to ${initialNote}`)
        this.state = {expectedNote : initialNote, notePlayed : undefined, assessment: "ready"};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {
                console.log("Checking if note needs replacing...")
                if (this.state.expectedNote === this.state.notePlayed) {
                    this.setState({expectedNote : this.getRandomKey().note, notePlayed : undefined, assessment: "ready"});
                }
            },
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    handleNotePlayed(note: string) {
        console.log(`Tutor heard the note : ${note} : Looking for ${this.state.expectedNote}` )

        this.setState({notePlayed: note})

        if (this.state.expectedNote === note) {
            this.setState({assessment: "good"})
        } else {
            this.setState({assessment: "bad"})
        }
    }

    getRandomKey() {
        return keys[keys.length * Math.random() | 1]
    }

    render() {
        return (
            <>
            <Stave note={this.state.expectedNote} status={this.state.assessment} wrongNote={undefined}/>
            <Hint expectedNote={this.state.expectedNote} notePlayed={this.state.notePlayed} assessment={this.state.assessment} />
            <Keyboard onNotePlayed={this.handleNotePlayed} />
            </>
        )
    }
}

export default Tutor;
