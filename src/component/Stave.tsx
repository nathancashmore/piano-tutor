import React from 'react';

interface Props {
    expectedNote: string
    playedNote : string | undefined
}

const Stave: React.FC<Props> = (props) => {
    let conditionalWrongNote;
    let expectedNoteStatus = "ready";

    if (props.playedNote !== undefined && props.playedNote !== props.expectedNote ) {
        conditionalWrongNote = <div data-testid="wrong-note" className={`quarter note ${props.playedNote} bad`}/>
    }

    if (props.playedNote === props.expectedNote) {
        expectedNoteStatus = "good";
    }

    return (
        <div className="staff-container">
            <div className="staff" data-testid="staff">
                <div className="bar double"/>
                <div className="clef treble"/>
                <div data-testid='expected-note' className={`quarter note ${props.expectedNote} ${expectedNoteStatus}`}>{props.expectedNote}</div>
                {conditionalWrongNote}
                <div className="bar end"/>
            </div>
        </div>
    )
}

export default Stave;








