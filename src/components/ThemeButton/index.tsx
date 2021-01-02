import React from 'react';

import './style.css'

interface IProps {
  theme: string;
}

const ThemeButton: React.FC<IProps> = ({ theme }) => {
  return (
    <div className={`theme-button container ${theme}`}>
      <div className={`theme-button ball ${theme}`} />
    </div>
  );
};

export default ThemeButton;
