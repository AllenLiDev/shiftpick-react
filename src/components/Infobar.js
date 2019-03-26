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
            <div className="row">
                <div className="col-sm">Shiftpick Demo</div>
                <div className="col-sm text-center">CG Brown - (604)320-2206</div>
                <div className="col-sm text-right">{this.state.time}</div>
            </div>
        )
    }
}

export default Infobar;