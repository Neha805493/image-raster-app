// src/components/App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

/**
 * Unit tests for the App component.
 * 
 * These tests ensure that the main application renders properly,
 * and that cell visibility toggles work correctly when interacting with the CellList and ImageGrid components.
 */
describe('App Component', () => {
  /**
   * Test to ensure the App component renders without crashing.
   */
  test('renders App component correctly', () => {
    render(<App />);
    
    // Expect the app container to be present in the document
    const appContainer = screen.getByTestId('app-container');
    expect(appContainer).toBeInTheDocument();
  });

  /**
   * Test to ensure that clicking a cell in the CellList toggles its visibility in the ImageGrid.
   */
  test('toggles cell visibility correctly', () => {
    render(<App />);
    
    // Query the first cell in both the CellList and ImageGrid
    const cellItem0 = screen.getByTestId('cell-item-0');
    const gridCell0 = screen.getByTestId('grid-cell-0');

    // Initially, the grid cell should be visible (not have the 'hidden-cell' class)
    expect(gridCell0).not.toHaveClass('hidden-cell');

    // Simulate a click on the first cell in the CellList
    fireEvent.click(cellItem0);

    // Now, the grid cell should be hidden (have the 'hidden-cell' class)
    expect(gridCell0).toHaveClass('hidden-cell');
  });
});
