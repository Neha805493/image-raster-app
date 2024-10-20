// src/components/ImageGrid.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ImageGrid from './ImageGrid';

/**
 * Unit tests for the ImageGrid component.
 * 
 * These tests ensure that the ImageGrid component renders grid cells correctly,
 * applies the proper CSS classes for hidden cells, and behaves as expected based on the visibility array.
 */
describe('ImageGrid Component', () => {
  /**
   * Test to ensure that all grid cells render correctly with their respective labels.
   */
  test('renders grid cells correctly', () => {
    // Mock array representing visibility of cells (all visible)
    const visibleCells = [true, true, true, true, true, true];
    const hoveredCell = null;

    const { getByText } = render(
      <ImageGrid visibleCells={visibleCells} hoveredCell={hoveredCell} />
    );

    // Check that all six cells are rendered
    for (let i = 1; i <= 6; i++) {
      expect(getByText(`Cell ${i}`)).toBeInTheDocument();
    }
  });

  /**
   * Test to ensure that the hidden-cell class is applied to cells that are not visible.
   */
  test('applies hidden class for invisible cells', () => {
    // Mock array where some cells are invisible
    const visibleCells = [true, false, true, true, false, true];
    const hoveredCell = null;

    const { container } = render(
      <ImageGrid visibleCells={visibleCells} hoveredCell={hoveredCell} />
    );

    // Query all cells with the 'hidden-cell' class
    const hiddenCells = container.querySelectorAll('.hidden-cell');

    // Expect two cells to have the 'hidden-cell' class
    expect(hiddenCells.length).toBe(2);
  });
});
