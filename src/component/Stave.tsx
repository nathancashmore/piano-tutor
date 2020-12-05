import React from 'react';

interface Props {
    note: string
    status: string
    wrongNote : string | undefined
}

const Stave: React.FC<Props> = (props) => {
    let conditionalWrongNote;
    if (props.wrongNote !== undefined) {
        conditionalWrongNote = <div data-testid="wrong-note" className={`quarter note ${props.wrongNote} bad`}/>
    }

    return (
        <div className="staff-container">
            <div className="staff" data-testid="staff">
                <div className="bar double"/>
                <div className="clef treble"/>
                <div className={`quarter note ${props.note} ${props.status}`}/>
                {conditionalWrongNote}
                <div className="bar end"/>
            </div>
        </div>
    )
}

export default Stave;








