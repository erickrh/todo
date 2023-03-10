import React from 'react';
import { ReactComponent as EditSVG } from './edit.svg';
import './TodoIcon.css';

const iconTypes = {
  'edit': color => (
    <EditSVG className="Icon-svg Icon-svg--edit" fill={color} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };