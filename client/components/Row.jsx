import React from 'react';
import Cell from './Cell';

const Row = ({ cells, toggle }) => {
    const toggleCell = (column) => () => toggle(column);
    const cellElements = cells.map((cell, index) => <Cell key={index} isAlive={cell} toggle={toggleCell(index)} />);
    return <tr>{cellElements}</tr>;
}

export default Row;