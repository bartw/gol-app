import React from 'react';
import Row from './Row';

const World = ({ rows, toggle }) => {
    const toggleRow = (row) => (column) => toggle(row, column);
    const rowElements = rows.map((row, index) => <Row key={index} cells={row} toggle={toggleRow(index)} />);
    return <table><tbody>{rowElements}</tbody></table>;
}

export default World;