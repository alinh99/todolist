import React from 'react';
import './SayHi.css';
import Aux from '../../../../hoc/Axu';

const sayHi = props => (
    <Aux>
        <div className="Sayhi">
            <div className="user" onClick={props.clickedDropDown}>{props.name}</div>
        </div>
    </Aux>
)

export default sayHi;