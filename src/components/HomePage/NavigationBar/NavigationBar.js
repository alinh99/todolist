import React, { Component } from 'react';
import './NavigationBar.css';
import Aux from '../../../hoc/Axu';
import DropMenu from './DropMenu/DropMenu';
import Search from './Search/Search';
import SayHi from './SayHi/SayHi';
import DrawToggle from './DrawToggle/DrawToggle';

class NavigationBar extends Component {
    state = {
        showDropMenu: false
    }
    showDropMenu = () => {
        this.setState({
            showDropMenu: !this.state.showDropMenu
        });
    }
    render(){
        return(
            <Aux>
                <div className="NavigationBar">
                    <DrawToggle/>
                    <Search/>
                    <span className="hi">Hi, </span><SayHi clickedDropDown={this.showDropMenu}/>
                    {this.state.showDropMenu ? <DropMenu clickedSignOutButton={this.props.clickedSignOutButton}/> : ""}
                </div>
            </Aux>
        )
    }

}




export default NavigationBar;