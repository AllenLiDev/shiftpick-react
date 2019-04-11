import React from 'react';

class PickingOrder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: 'Loading..',
            next: 'Loading..',
            currentTime: '1:00',
            nextTime: '1:05'
        };
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h5>Currently: {this.state.current}</h5>
                </div>
                <div className="row">
                    <h5>Next: {this.state.next}</h5>
                </div>
            </div>
        );
    }
}

export default PickingOrder;