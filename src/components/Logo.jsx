import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

function Logo({ width = '100px' }) {
  return (
    <div className="flex items-center">
      <FaPlayCircle className="text-grey-500 mr-2" size={30} />
      <span className="text-xl font-bold text-black-800">YOUR VLOGS</span>
    </div>
  );
}

export default Logo;
