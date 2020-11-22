import React from 'react';
import './App.css';
import Tutor from "./component/Tutor";

function App() {

    // So a note is displayed on the stave
    // If you click the right note on the keyboard then:
    // * the note goes green
    // * the note plays correctly
    // * a random new note appears
    // However if its incorrect the note:
    // * the note goes red
    // * an incorrect buzzer noise is played


    return (
        <>
            <Tutor/>
        </>
    );
}

export default App;
