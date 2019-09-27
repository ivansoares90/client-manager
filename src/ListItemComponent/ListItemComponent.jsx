import React from 'react';

const ListItemComponent = (props) => {
    return (
        <li><input type = "text" id = {props.id} value = {props.clientName} onChange = {props.handleChange} /><button id = {props.id} onClick = {props.onRemove}>Remove</button></li>
    )
  }

export default ListItemComponent;
