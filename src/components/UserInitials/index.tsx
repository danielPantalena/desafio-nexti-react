import React from 'react';

import './style.css';

interface IProps {
  initials: string;
}

const UserInitials: React.FC<IProps> = ({ initials }) => {
  return (
    <div className="initials-ball">
      {initials}
    </div>
  );
};

export default UserInitials;
