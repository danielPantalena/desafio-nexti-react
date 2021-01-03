import React from 'react';

import './style.css';

interface IProps {
  initials: string;
  online: boolean;
  size: 'large' | 'small';
}

const UserInitials: React.FC<IProps> = ({ initials, online, size }) => {
  return (
    <div className={`initials-container ${size}`}>
      <div className={`initials-ball ${size}`}>
        <span>{initials.toUpperCase()}</span>
      </div>
      {online && <div className="online-ball" />}
    </div>
  );
};

export default UserInitials;
