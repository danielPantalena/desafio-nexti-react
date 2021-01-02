import React from 'react';

import './style.css';

interface IProps {
  initials: string;
}

const UserInitials: React.FC<IProps> = ({ initials }) => {
  return (
    <div className="initials-container">
      <div className="initials-ball">
        <span>{initials.toUpperCase()}</span>
      </div>
      <div className="online-ball" />
    </div>
  );
};

export default UserInitials;
