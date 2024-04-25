import React, { useState } from 'react';

const ElongatablePane = () => {
  // State to manage the elongation status
  const [isElongated, setIsElongated] = useState(false);

  // Function to toggle elongation status
  const toggleElongation = () => {
    setIsElongated(!isElongated);
  };

  // Style object for pane to adjust its width based on elongation status
  const paneStyle = {
    width: isElongated ? '400px' : '200px', // Adjust width as needed
    transition: 'width 0.5s ease', // Add transition for smooth animation
    border: '1px solid #ccc', // Just for demonstration
    padding: '10px', // Just for demonstration
  };

  return (
    <div>
      <div style={paneStyle}>
        {/* Content of the elongatable pane */}
        This is an elongatable pane.
      </div>
      {/* Button to toggle elongation */}
      <button onClick={toggleElongation}>
        {isElongated ? 'Shrink' : 'Elongate'} Pane
      </button>
    </div>
  );
};

export default ElongatablePane;