// src/components/ImageGrid.js
import React from 'react';
import './ImageGrid.css';

/**
 * ImageGrid Component
 * Displays an image grid overlay where each cell can be shown/hidden.
 * 
 * @param {boolean[]} visibleCells - Array indicating the visibility of each cell
 * @param {number} hoveredCell - Index of the currently hovered cell
 * 
 * @returns {JSX.Element} The rendered ImageGrid component
 */
const ImageGrid = ({ visibleCells, hoveredCell }) => {
  return (
    <div className="image-container" data-testid="image-container">
      <div className="grid">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`grid-cell ${visibleCells[index] ? '' : 'hidden-cell'}`} // Apply hidden class if cell is not visible
            style={{
              gridArea: `cell${index + 1}`,
              borderColor: hoveredCell === index ? 'red' : 'black', // Change border color on hover
              backgroundImage: visibleCells[index] ? `url(${process.env.PUBLIC_URL}/image.png)` : 'none', // Image URL
              backgroundSize: '300% 200%',
              backgroundPosition: getBackgroundPosition(index),
            }}
            data-testid={`grid-cell-${index}`}
          >
            {/* Always render the cell name */}
            <span className="cell-text">{`Cell ${index + 1}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Helper function to calculate background position for each cell.
 * 
 * @param {number} index - The index of the grid cell
 * @returns {string} The background position for the cell
 */
const getBackgroundPosition = (index) => {
  switch (index) {
    case 0: return '0% 0%';   // Cell 1
    case 1: return '50% 0%';  // Cell 2
    case 2: return '100% 0%'; // Cell 3
    case 3: return '0% 100%'; // Cell 4
    case 4: return '50% 100%'; // Cell 5
    case 5: return '100% 100%'; // Cell 6
    default: return '0% 0%';
  }
};

export default ImageGrid;
