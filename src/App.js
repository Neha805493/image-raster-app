// src/components/App.js
import React, { useState } from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';
import CellList from './components/CellList';

/**
 * Main Application Component
 * Manages visibility of grid cells and hover state
 * 
 * @returns {JSX.Element} The rendered App component
 */
const App = () => {
  // State for managing which cells are visible (default: all visible)
  const [visibleCells, setVisibleCells] = useState([true, true, true, true, true, true]);
  
  // State for managing the index of the currently hovered cell (default: none)
  const [hoveredCell, setHoveredCell] = useState(null);

  /**
   * Toggles the visibility of a specific cell based on its index.
   * 
   * @param {number} index - The index of the cell to toggle
   */
  const toggleCellVisibility = (index) => {
    setVisibleCells((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible)) // Toggle the clicked cell
    );
  };

  /**
   * Sets the hover state when a cell is hovered.
   * 
   * @param {number} index - The index of the cell being hovered
   */
  const handleHoverCell = (index) => {
    setHoveredCell(index);
  };

  /**
   * Resets the hover state when the mouse leaves a cell.
   */
  const handleLeaveCell = () => {
    setHoveredCell(null);
  };

  return (
    <div className="app-container" data-testid="app-container">
      <CellList
        visibleCells={visibleCells}
        toggleCellVisibility={toggleCellVisibility}
        handleHoverCell={handleHoverCell}
        handleLeaveCell={handleLeaveCell}
      />
      <ImageGrid visibleCells={visibleCells} hoveredCell={hoveredCell} />
    </div>
  );
};

export default App;
