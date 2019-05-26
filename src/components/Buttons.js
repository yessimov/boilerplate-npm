import React from 'react'

const Buttons = (props) => {
    return (
        <div className="p-3 buttons">
            <h4>Валюта</h4>
            <div className="btn-group d-flex" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-outline-primary p-2" onClick={props.handleClick} value={1} >RUB</button>
                <button type="button" className="btn btn-outline-primary p-2" onClick={props.handleClick} value={0.015} >USD</button>
                <button type="button" className="btn btn-outline-primary p-2" onClick={props.handleClick} value={0.014}>EUR</button>
            </div>
        </div>
    )
}

export default Buttons;

