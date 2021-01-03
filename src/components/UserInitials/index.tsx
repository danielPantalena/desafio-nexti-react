import React from 'react';
import { BiCheck } from 'react-icons/bi';

import './style.css';

interface IProps {
  initials: string;
  online: boolean;
  size: 'large' | 'small';
  checkbox?: boolean;
  selected?: boolean;
}

const UserInitials: React.FC<IProps> = ({ initials, online, size, checkbox, selected }) => {
  return (
    <div className={`initials-container ${size}`}>
      <div className={`initials-ball ${size}`}>
        {checkbox || selected ? (
          <span className="checkbox">
            {selected && (
              <div className="check-mark-container">
                <BiCheck color="#11c700" size={54} />
              </div>
            )}
          </span>
        ) : (
          <span>{initials.toUpperCase()}</span>
        )}
      </div>
      {online && <div className="online-ball" />}
    </div>
  );
};

export default UserInitials;
