import React from 'react';
import './Header.css';

const sampleName = {
  name: "ReactDemo"
}

const userName = {
  name: "Chetan"
}

const header = props => {
  return (
      <div className = "Header">
        <h3 className="Header--sampleName"> {sampleName.name}</h3>
        <h3 className="Header--userName">{userName.name}</h3>      
      </div>
  );
}

export default header;