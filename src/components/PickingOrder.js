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
            <div class="card text-center">
                <div class="card-header">
                    Who's Picking
                </div>
                <div class="card-body">
                    <h5 class="card-title">Current</h5>
                    <p class="card-text">{this.state.current}</p>
                    <span class="badge badge-primary">Time Remaning {this.state.currentTime}</span>
                </div>
                <div class="card-footer text-muted">
                    Next: {this.state.next}
                </div>
            </div>
        );
    }
}

export default PickingOrder;