import React from 'react';

const Cell = ({ isAlive, toggle }) => {
    const cellStyle = {
        backgroundColor: isAlive ? 'green' : 'red',
        width: 20,
        height: 20,
        margin: 0,
        padding: 0
    };
    return <td style={cellStyle} onClick={toggle}>&nbsp;</td>;
}

export default Cell;