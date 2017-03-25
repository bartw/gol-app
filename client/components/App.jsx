import React from 'react';
import World from './World';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.defaultWorld = [];
        for (let i = 0; i < 25; i++) {
            this.defaultWorld[i] = []
            for (let j = 0; j < 25; j++) {
                this.defaultWorld[i][j] = false;
            }
        }

        this.state = {
            world: this.defaultWorld
        };

        this.getNextWorld = this.getNextWorld.bind(this);
        this.reset = this.reset.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    getNextWorld() {
        const body = JSON.stringify({ world: this.state.world });
        const options = {
            method: 'POST',
            body: body,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        };
        fetch('/api/world', options)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                this.setState({ world: data.world });
            })
            .catch(error => {
                console.log(error.message);
                this.reset();
            });
    }

    reset() {
        this.setState({ world: this.defaultWorld });
    }

    toggle(rowIndexToToggle, columnIndexToToggle) {
        this.setState(prevState => ({ world: prevState.world.map((row, rowIndex) => row.map((cell, columnIndex) => rowIndex === rowIndexToToggle && columnIndex === columnIndexToToggle ? !cell : cell)) }));
    }

    toggleAll() {
        this.setState(prevState => ({ world: prevState.world.map(row => row.map(cell => !cell)) }));
    }

    render() {
        return (
            <div>
                <p>Click a cell to toggle it.</p>
                <World rows={this.state.world} toggle={this.toggle} />
                <button onClick={this.getNextWorld}>Next</button>
                <button onClick={this.toggleAll}>Toggle all</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}