import React from 'react';
import {Toggle} from "react-toggle-component"

interface Props {
    expectedNote: string
    notePlayed: string | undefined
}

interface State {
    toggle: boolean
}

class Hint extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {toggle : false}
    }

    handleToggle(target: HTMLInputElement) {
        this.setState({"toggle": target.checked})
    }

    wrongNotePlayed(): boolean {
        return this.props.notePlayed !== undefined && this.props.notePlayed !== this.props.expectedNote
    }

    rightNotePlayed(): boolean {
        return this.props.notePlayed !== undefined && this.props.notePlayed === this.props.expectedNote
    }

    render() {
        return (
            <div className="hint-container">
                <label htmlFor="hint-toggle">Hint ? </label>
                <Toggle
                    data-testid="hint-toggle"
                    name="hint-toggle"
                    borderColor="black"
                    knobColor="black"
                    onToggle={(e: React.ChangeEvent) => this.handleToggle(e.target as HTMLInputElement)}
                />
                {this.state.toggle &&
                <>
                  <span>Looking for the note </span>
                  <span data-testid="hint-expected-note"
                        aria-label={this.props.expectedNote}
                        className={`hint-note ${this.rightNotePlayed() ? 'hint-note-good' : ""}`}>
                      {Hint.getDisplayFor(this.props.expectedNote)}
                  </span>
                    {this.wrongNotePlayed() &&
                    <div data-testid="hint-bad-note-message" className={"hint-bad-note-message"}>
                      <span>.... but you played </span>
                      <span data-testid="hint-note-played"
                            aria-label={this.props.notePlayed}
                            className={"hint-note hint-note-bad"}>
                          {Hint.getDisplayFor(this.props.notePlayed)}
                      </span>
                    </div>
                    }
                </>
                }
            </div>
        )
    }

    private static getDisplayFor(expectedNote: string | undefined): string {
        if (expectedNote === undefined ) {
            return '';
        } else {
            return expectedNote
                .replace('s', '#')
                .toUpperCase()
                .replace(/[0-9]/g, '');
        }
    }
}

export default Hint;








