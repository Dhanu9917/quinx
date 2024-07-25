import React, { useState } from 'react';
import Grid from './Grid';
import { solveSudoku, isValidSudoku } from '../utils/sudokuSolver';
import '../App.css';

const initialGrid = Array(9).fill(Array(9).fill(''));

const SudokuSolver = () => {
  const [grid, setGrid] = useState(initialGrid);
  const [message, setMessage] = useState('');

  const handleChange = (row, col, value) => {
    const newGrid = grid.map((r, rowIndex) =>
      r.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? value : cell
      )
    );
    setGrid(newGrid);
  };

  const validateGrid = () => {
    if (isValidSudoku(grid)) {
      setMessage('The current state is valid.');
    } else {
      setMessage('The current state is invalid.');
    }
  };

  const solveGrid = () => {
    if (!isValidSudoku(grid)) {
      setMessage('The current state is invalid.');
      return;
    }
    const solvedGrid = solveSudoku(grid);
    if (solvedGrid) {
      setGrid(solvedGrid);
      setMessage('Sudoku solved!');
    } else {
      setMessage('No solution found.');
    }
  };

  return (
    <div>
      <h1>Sudoku Solver</h1>
      <Grid grid={grid} handleChange={handleChange} />
      <button onClick={validateGrid}>Validate</button>
      <button onClick={solveGrid}>Solve</button>
      <p>{message}</p>
    </div>
  );
};

export default SudokuSolver;
