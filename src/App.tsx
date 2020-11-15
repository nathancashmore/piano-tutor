import React from 'react';
import './App.css';
import Keyboard from "./component/Keyboard";
import Stave from "./component/Stave";

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
            <Stave/>
            <Keyboard/>
        </>
    );
}

export default App;
