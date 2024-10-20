// src/components/CellList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CellList from './CellList';

/**
 * Unit tests for the CellList component.
 * 
 * These tests ensure that the CellList component renders properly,
 * calls appropriate handlers on user interaction, and behaves correctly when toggling visibility.
 */
describe('CellList Component', () => {
  // Mock functions for event handlers
  const toggleCellVisibility = jest.fn();
  const handleHoverCell = jest.fn();
  const handleLeaveCell = jest.fn();

  // Mock array representing visibility of cells (all initially visible)
  const visibleCells = [true, true, true, true, true, true];

  /**
   * Test to ensure the CellList renders all the cell items correctly.
   */
  test('renders cell items correctly', () => {
    const { getByText } = render(
      <CellList 
        visibleCells={visibleCells}
        toggleCellVisibility={toggleCellVisibility}
        handleHoverCell={handleHoverCell}
        handleLeaveCell={handleLeaveCell}
      />
    );

    // Check that all six cells are rendered
    for (let i = 1; i <= 6; i++) {
      expect(getByText(`Cell ${i}`)).toBeInTheDocument();
    }
  });

  /**
   * Test to ensure the toggleCellVisibility handler is called with the correct index
   * when a cell is clicked.
   */
  test('calls toggleCellVisibility on cell click', () => {
    const { getByText } = render(
      <CellList 
        visibleCells={visibleCells}
        toggleCellVisibility={toggleCellVisibility}
        handleHoverCell={handleHoverCell}
        handleLeaveCell={handleLeaveCell}
      />
    );

    // Simulate a click on Cell 2
    const cell2Toggle = getByText(/Cell 2/i);
    fireEvent.click(cell2Toggle);

    // Expect the toggleCellVisibility handler to have been called with the index of Cell 2 (index 1)
    expect(toggleCellVisibility).toHaveBeenCalledWith(1);
  });

  /**
   * Test to ensure hover and leave handlers are called correctly when the user interacts
   * with a cell.
   */
  test('calls hover and leave handlers', () => {
    const { getByText } = render(
      <CellList 
        visibleCells={visibleCells}
        toggleCellVisibility={toggleCellVisibility}
        handleHoverCell={handleHoverCell}
        handleLeaveCell={handleLeaveCell}
      />
    );

    // Simulate mouse entering Cell 2
    const cell2Toggle = getByText(/Cell 2/i);
    fireEvent.mouseEnter(cell2Toggle);
    expect(handleHoverCell).toHaveBeenCalledWith(1); // Hovering over Cell 2 (index 1)

    // Simulate mouse leaving Cell 2
    fireEvent.mouseLeave(cell2Toggle);
    expect(handleLeaveCell).toHaveBeenCalled(); // Expect the leave handler to be called
  });
});
