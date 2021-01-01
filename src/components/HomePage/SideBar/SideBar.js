import React, { Component, useState } from 'react';
import './SideBar.css';
import Aux from '../../../hoc/Axu';
import Item from './Item/Item';
import { faShare, faHeadphones, faBook } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo/Logo';
import TodoMain from '../Main/TodoMain/TodoMain';
import TaskListMain from '../Main/TasklistMain/TasklistMain';
import Main from '../Main/Main';
import DisplayTasklist from './DisplayTaskList/DisplayTaskList';


class SideBar extends Component {
    
    sideBar = controller => () => {
        
        let op1 = true;
        let op2 = false;
        let op3 = false;

        if (controller === 0) {
            op1 = true;
            op2 = false;
            op3 = false;
        } else if (controller === 1) {
            op1 = false;
            op2 = true;
            op3 = false;
        } else {
            op1 = false;
            op2 = false;
            op3 = true;
        }

    }


    render() {
        const { op1, op2, op3} = this.props;
        return (
            <Aux>
                <div className="SideBar">
                    <div className="content">
                        <div className="sticky-content">
                            <Logo clickedLogo={this.props.clickedLogo} />
                            {op1 ? <Item icon={faBook} label="Tasks" number={this.props.tasklists} color="#fff" click={this.props.clickTodo} /> : <Item icon={faBook} label="Tasks" number={this.props.tasklists} color="white" click={this.props.clickTodo} />}
                            {op2 ? <Item icon={faHeadphones} label="Support" number={this.props.shared} color="#fff" click={this.clickInBox} /> : <Item icon={faHeadphones} label="Support" number={this.props.shared} color="white" click={this.props.clickInBox} />}
                            {op3 ? <Item icon={faShare} label="Share" number={this.props.share} color="#fff" click={this.props.clickShare} /> : <Item icon={faShare} label="Share" number={this.props.share} color="white" click={this.props.clickShare} />}
                            <br />
                            <br />
                            <hr style={{
                                backgroundColor: '#000',
                                border: '0.1px solid #000',
                                margin: '0 auto',
                                lineHeight: '0.2px',
                                width: "70%"
                            }} />
                                    {/* {IdiomaticReactList} */}
                            <DisplayTasklist 
                                tasklists={this.props.taskListItem}
                                clicked={this.props.addTasklist}
                                />
                        </div>
                    </div>
                </div>
            </Aux>

        )
    }   
}
const IdiomaticReactList = (props) => {
    return (
      <div>
        {props.items.map((item, index) => (
          <div key={item} itemID={index}>{this.props.taskListName}</div>
        ))}
      </div>
    ); 
}
export default SideBar