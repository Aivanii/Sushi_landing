import React from 'react';

interface ButtonProps {
  text?: string; 
  fn?: () => void; 
}

const Button: React.FC<ButtonProps> = ({
  text = 'None', 
  fn = () => {}, 
}) => {
  return (
    <button onClick={fn} className="bg-amber-500 py-4 px-6 rounded-sm m-4 text-white 
    hover:bg-amber-600 transition active:bg-amber-700 cursor-pointer">
      {text}
    </button>
  );
};

export default Button;
