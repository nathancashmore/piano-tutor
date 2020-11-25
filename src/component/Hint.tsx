import React from 'react';

interface Props {
    expectedNote: string
    notePlayed: string | undefined
    assessment: string
}

const Hint: React.FC<Props> = (props) => {
    const defaultResponse = (
        <>
            <span>Looking for the note </span>
            <span data-testid="expected-note" className={"hint-note"}>{props.expectedNote}</span>
        </>
    )

    if(props.assessment === "bad") {
        return (
            <div data-testid="bad-note-message"  className={"hint"}>
                {defaultResponse}
                <span>.... but you played </span>
                <span data-testid="note-played" className={"hint-note hint-note-bad"}>{props.notePlayed}</span>
            </div>
        )
    } else {
        return (
            <div data-testid="default-note-message" className={"hint"}>
                {defaultResponse}
            </div>
        )
    }
}

export default Hint;








