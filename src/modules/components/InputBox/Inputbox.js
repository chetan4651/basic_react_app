import React from 'react';

const InputBox = props =>{
    return <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholderValue}/>;
}

export default InputBox;