import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 2px;
  max-width: 400px;
  margin: 20px auto;
  background-color: #444;
  padding: 10px;
  border-radius: 10px;
`;

const Cell = styled.input`
  width: 40px;
  height: 40px;
  text-align: center;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px #007bff;
  }
`;

const Grid = ({ grid, handleChange }) => {
  return (
    <GridContainer>
      {grid.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            type="number"
            min="1"
            max="9"
            value={value || ''}
            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
          />
        ))
      )}
    </GridContainer>
  );
};

export default Grid;
