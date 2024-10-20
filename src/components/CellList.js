// src/components/CellList.js
import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './CellList.css';

/**
 * CellList Component
 * Displays a vertical list of cells, allowing users to toggle visibility.
 * 
 * @param {boolean[]} visibleCells - Array indicating visibility of each cell
 * @param {function} toggleCellVisibility - Function to toggle visibility of a specific cell
 * @param {function} handleHoverCell - Function to handle mouse hover over a cell
 * @param {function} handleLeaveCell - Function to handle mouse leaving a cell
 * 
 * @returns {JSX.Element} The rendered CellList component
 */
const CellList = ({ visibleCells, toggleCellVisibility, handleHoverCell, handleLeaveCell }) => {
  return (
    <div className="cell-list" data-testid="cell-list">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="cell-item"
          onClick={() => toggleCellVisibility(index)} // Toggle visibility on click
          onMouseEnter={() => handleHoverCell(index)} // Handle hover
          onMouseLeave={handleLeaveCell} // Handle mouse leave
          style={{
            borderColor: visibleCells[index] ? '#fff' : 'rgba(255, 255, 255, 0.2)', // Border color based on visibility
          }}
          data-testid={`cell-item-${index}`}
        >
          {visibleCells[index] ? <FaEye /> : <FaEyeSlash />} {/* Eye icon based on visibility */}
          <span>Cell {index + 1}</span>
        </div>
      ))}
    </div>
  );
};

export default CellList;
