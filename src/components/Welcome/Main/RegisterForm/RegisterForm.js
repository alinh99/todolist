import React, { Component } from 'react';
import Aux from '../../../../hoc/Axu';
import Input from './Input/Input';
import Button from './Button/Button';
import axios from '../../../../axios/axios';
import Spinner from '../../Spinner/Spinner';
import store from 'store';
import KeyboardEventHandler from 'react-keyboard-event-handler';

class RegisterForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        rightPassword: true,
        loading: false,
        message: false,
        done: false
    }

    setFirstname = (firstName) => {
        this.setState({ firstName: firstName })
    }

    setLastname = (lastName) => {
        this.setState({ lastName: lastName });
    }

    setEmail = (email) => {
        this.setState({ email: email });
    }

    setPassword = (password) => {
        this.setState({ password: password });
    }

    checkConfirm = (password) => {
        if (password.length !== 0) {
            this.setState({ rightPassword: password === this.state.password });
        }
    }

    registerHandler = () => {
        this.setState({ loading: true });
        if (this.state.rightPassword) {
            const data = {
                name: this.state.firstName + this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }

            axios.post('/auth', data)
                .then((res) => {
                    this.setState({ loading: false });
                    store.set('successfulRegister', true);
                    this.setState({ done: true });
                    this.props.done(this.state.done);
                })
                .catch((error) => {
                    this.setState({ loading: false });
                    const message = error.response.data.errors.full_messages;
                    let keys = Object.keys(message)
                        .map(iKeys => Number(iKeys))
                        .map(i => [...Array(message[i])])
                        .reduce((arr, el) => {
                            return arr.concat(el)
                        })
                        .map(mes => <p keys={mes} style={{ color: "red", textAlign: "center", marginTop:"3px" }}>{mes}</p>)
                    this.setState({ message: keys })
                })
        }
    }

    pressKey = () => {
        this.registerHandler();
    }

    render() {
        return (
            <Aux>

                <KeyboardEventHandler
                    handleKeys={['enter']}
                    onKeyEvent={this.pressKey}>
                    <div className="main-w3layouts wrapper">
                        
                        <div className="main-agileinfo">
                            <div className="agileits-top">
                            <h2 className="Title">Sign Up</h2>
                                <div className="RegisterForm">
                                    
                                    <Input className="text email" label="First Name" type="text" setData={this.setFirstname} message={true} />
                                    <Input className="text email" label="Last Name" type="text" setData={this.setLastname} message={true} />
                                    <Input className="text email" label="Email" type="email" setData={this.setEmail} message={true} />
                                    <Input className="text" label="Password" type="password" setData={this.setPassword} message={true} />
                                    <Input className="text w3lpass" label="Confirm Password" type="password" setData={this.checkConfirm} message={this.state.rightPassword} />
                                    <div className="ButtonGroup">
                                        <Button className="RegisterButton" title="Sign Up Now" clicked={this.registerHandler} />
                                        <p>Have an Account?<Button className="LoginButton" clicked={this.props.clickedLoginButton} title="Login now!" /></p>
                                        
                                    </div>
                                    {this.state.message}
                                    {this.state.loading ? <div className="SpinnerContainer"><Spinner /></div> : ""}
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    
                </KeyboardEventHandler>
                
                <ul className="colorlib-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Aux>
        )
    }
}

export default RegisterForm;