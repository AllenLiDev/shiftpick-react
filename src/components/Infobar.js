import React from 'react';
import moment from 'moment';

class Infobar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: 'Loading...' };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: moment().format('MMMM Do YYYY, h:mm:ss a') });
        }, 1000);
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Shiftpick Demo</span>
                <div>CG Brown - (604)320-2206</div>
                <div>{this.state.time}</div>
            </nav>
        )
    }
}

export default Infobar;