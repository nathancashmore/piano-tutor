import React from 'react';

interface Props {
    expectedNote: string
    notePlayed: string | undefined
}

const Hint: React.FC<Props> = (props) => {
    const defaultResponse = (
        <>
            <span>Looking for the note </span>
            <span data-testid="hint-expected-note" className={"hint-note"}>{props.expectedNote}</span>
        </>
    )

    if(props.notePlayed !== undefined && props.notePlayed !== props.expectedNote) {
        return (
            <div data-testid="hint-bad-note-message"  className={"hint"}>
                {defaultResponse}
                <span>.... but you played </span>
                <span data-testid="hint-note-played" className={"hint-note hint-note-bad"}>{props.notePlayed}</span>
            </div>
        )
    } else {
        return (
            <div data-testid="hint-default-note-message" className={"hint"}>
                {defaultResponse}
            </div>
        )
    }
}

export default Hint;








