import React from 'react';
import Row from './Row';

const World = ({ rows }) => {
    const rowElements = rows.map((row, index) => <Row key={index} cells={row} />);
    return <table><tbody>{rowElements}</tbody></table>;
}

export default World;