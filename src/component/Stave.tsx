import React from 'react';

interface Props {
    note: string
    status: string
}

const Stave: React.FC<Props> = (props) => {
    return (
        <div className="staff-container">
            <div className="staff">
                <div className="bar double"/>
                <div className="clef treble"/>
                <div className={`quarter note ${props.note} ${props.status}`}/>
                <div className="bar end"/>
            </div>
        </div>
    )
}

export default Stave;








