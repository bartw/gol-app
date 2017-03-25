import React from 'react';
import Cell from './Cell';

const Row = ({ cells }) => {
    const cellElements = cells.map((cell, index) => <Cell key={index} isAlive={cell} />);
    return <tr>{cellElements}</tr>;
}

export default Row;