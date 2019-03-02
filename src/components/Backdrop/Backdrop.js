import React from 'react';

import './Backdrop.css';

const Backdrop = props => (
  props.show ? <div onClick={props.onClick} className="Backdrop"/> : null
);

export default Backdrop;
