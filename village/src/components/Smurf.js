import React from 'react';
import "./components.css"

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3 className='smurfItem'>{props.name}</h3>
      <strong className='smurfItem'>{props.height} tall</strong>
      <p className='smurfItem'>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

