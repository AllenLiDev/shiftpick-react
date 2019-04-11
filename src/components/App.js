import React from 'react';
import Infobar from './Infobar';
import PickingOrder from './PickingOrder';
import SavedShifts from './SavedShifts';
import Shifts from './Shifts';

import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shifts: [], savedShifts: [] };
    }

    componentDidMount() {
        // hardcode must load from DB
        this.setState({
            shifts: [
                { id: 1, location: 'CG Brown', time: '1 - 9' },
                { id: 2, location: 'Bonsor', time: '11 - 5' },
                { id: 3, location: 'Eileen Dailly', time: '9 - 1' },
                { id: 4, location: 'Fred Randall', time: '2 - 10' }
            ]
        });
    }

    addToSaved = (shift) => {
        let temp = this.state.savedShifts;
        temp.push(shift);
        this.setState({ savedShifts: temp });
    }

    removeFromSaved = (shift) => {
        let temp = this.state.savedShifts;
        temp.splice(this.state.savedShifts.indexOf(shift), 1);
        this.setState({savedShifts: temp});
    }

    render() {
        return (
            <div className="container">
                <Infobar />
                <PickingOrder />
                <SavedShifts savedShifts={this.state.savedShifts} removeFromSaved={this.removeFromSaved} />
                <Shifts shifts={this.state.shifts} addToSaved={this.addToSaved} />
            </div>
        );
    };
};

export default App;