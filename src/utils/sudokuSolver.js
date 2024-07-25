export const isValidSudoku = (grid) => {
    const isValid = (grid, row, col, value) => {
      for (let i = 0; i < 9; i++) {
        if (grid[row][i] === value || grid[i][col] === value) {
          return false;
        }
        const subGridRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const subGridCol = 3 * Math.floor(col / 3) + i % 3;
        if (grid[subGridRow][subGridCol] === value) {
          return false;
        }
      }
      return true;
    };
  
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] !== '') {
          const value = grid[row][col];
          grid[row][col] = '';
          if (!isValid(grid, row, col, value)) {
            return false;
          }
          grid[row][col] = value;
        }
      }
    }
    return true;
  };
  
  export const solveSudoku = (grid) => {
    const findEmpty = (grid) => {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (grid[row][col] === '') {
            return [row, col];
          }
        }
      }
      return null;
    };
  
    const isValid = (grid, row, col, value) => {
      for (let i = 0; i < 9; i++) {
        if (grid[row][i] === value || grid[i][col] === value) {
          return false;
        }
        const subGridRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const subGridCol = 3 * Math.floor(col / 3) + i % 3;
        if (grid[subGridRow][subGridCol] === value) {
          return false;
        }
      }
      return true;
    };
  
    const solve = (grid) => {
      const emptySpot = findEmpty(grid);
      if (!emptySpot) return true;
      const [row, col] = emptySpot;
  
      for (let num = 1; num <= 9; num++) {
        if (isValid(grid, row, col, num.toString())) {
          grid[row][col] = num.toString();
          if (solve(grid)) return true;
          grid[row][col] = '';
        }
      }
      return false;
    };
  
    const gridCopy = grid.map(row => row.slice());
    if (solve(gridCopy)) {
      return gridCopy;
    }
    return null;
  };
  