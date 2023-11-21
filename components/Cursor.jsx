import React, { useState } from 'react';

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });

  const updateCursorPosition = (e) => {
    setCursorPosition({ left: e.pageX, top: e.pageY });
  };

  return (
    <div onMouseEnter={updateCursorPosition}
      className="cursor"
      style={{ position: 'fixed', left: cursorPosition.left + 'px', top: cursorPosition.top + 'px' }}
    >
      {/* Your cursor content goes here */}
    </div>
  );
};

export default Cursor;
