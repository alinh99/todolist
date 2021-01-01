import React from 'react';
import './DisplayTaskList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faPlus, faEdit} from '@fortawesome/free-solid-svg-icons';

function DisplayTaskList (props) {

    const tasklists = props.tasklists;

    const tasklistDisplay = tasklists.map(tasklist => {
        return (
            <div className="SBTasklistView">
                <div style={{fontSize:"8px", marginRight: "20px"}}>
                    <FontAwesomeIcon icon={faCircle} color="red"/>
                </div>
                <p>{tasklist.name}</p>
            </div>  
        )
    })

    return(
        <div className="SBTasklist">
            {tasklistDisplay}
            <div className="SBAddBtn" onClick={props.clicked}>
                <div style={{fontSize:"15px", marginRight:"15px"}}>
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
                <p>Add new</p>
            </div>
        </div>
    )
}

export default DisplayTaskList;