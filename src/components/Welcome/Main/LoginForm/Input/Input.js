import React, { Component } from 'react';
import './Input.css';
import Aux from '../../../../../hoc/Axu';

class Input extends Component {
    changeHandler = (e) => {
        let value = e.target.value;
        this.props.setData(value);
    }

    render(){
        return(
            <Aux>
                <div className="Input">
                    <div className="Block">
                        <label>{this.props.label}</label>
                        <input type={this.props.type} onChange={this.changeHandler}/>
                </div>
            </div>
        </Aux>
        )
    }
}

export default Input;