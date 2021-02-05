import React from 'react'

const Input = (props) => {
    return (
        <div style={{marginBottom:'30px'}}>
            <label className="form-label" style={{marginRight:'10px'}}>{props.label}:</label>
            <input 
            type={props.type} 
            className="form-control" 
            placeholder={props.placeholder} 
            value={props.value}
            onChange={props.onChange}
            style={{borderRadius: '8px'}}
            />
            <div id="emailHelp" className="form-text">{props.message}</div>
        </div>

    )



}


export default Input