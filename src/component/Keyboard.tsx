import React from 'react';
import Key from "./Key";

const Keyboard: React.FC = () => {
    return (
        <div className="keyboard-container">
            <div data-testid={"keyboard"} className="keyboard">
                <Key note={'c'} color={'white'}/>
                <Key note={'cs'} color={'black'}/>
                <Key note={'d'} color={'white'}/>
                <Key note={'ds'} color={'black'}/>
                <Key note={'e'} color={'white'}/>
                <Key note={'f'} color={'white'}/>
                <Key note={'fs'} color={'black'}/>
                <Key note={'g'} color={'white'}/>
                <Key note={'gs'} color={'black'}/>
                <Key note={'a'} color={'white'}/>
                <Key note={'as'} color={'black'}/>
                <Key note={'b'} color={'white'}/>
            </div>
        </div>
    )
}

export default Keyboard;
