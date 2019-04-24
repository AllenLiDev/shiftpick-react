import React from 'react';

class PickingOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'Loading..',
            next: 'Loading..',
            currentTime: '1:00'
        };
    }

    render() {
        return (
            <div className="card text-center">
                <div className="card-header">
                    Who's Picking
                </div>
                <div className="card-body">
                    <h5 className="card-title">Current</h5>
                    <p className="card-text">{this.state.current}</p>
                    <span className="badge badge-primary">Time Remaning {this.state.currentTime}</span>
                </div>
                <div className="card-footer text-muted">
                    Next: {this.state.next}
                </div>
            </div>
        );
    }
}

export default PickingOrder;