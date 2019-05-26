import React from 'react'
import Form from './Form'
import Buttons from './Buttons'

const Sidebar = (props) => {

    return (
        <div className="sidebar">
            <Buttons handleClick={props.handleClick}/>
            <Form
                props={props}
            />
        </div>
    )
}

export default Sidebar