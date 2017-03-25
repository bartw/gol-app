import React from 'react';
import World from './World';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.defaultWorld = [
            [true, true, true, false, false, false],
            [true, true, false, false, false, false],
            [true, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false],
            [false, false, false, false, false, false]
        ];

        this.state = {
            world: this.defaultWorld
        };

        this.getNextWorld = this.getNextWorld.bind(this);
        this.reset = this.reset.bind(this);
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

    render() {
        return (
            <div>
                <World rows={this.state.world} />
                <button onClick={this.getNextWorld}>Next</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}