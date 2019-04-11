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
        })
        // load from local storage
        // if (localStorage.getItem('savedShifts')) {
        //     this.setState({ savedShifts: [localStorage.getItem('savedShifts')] });
        // } else {
        //     console.log('no saved shifts');
        //     // create
        //     localStorage.setItem('savedShifts', JSON.parse(this.state.shifts));
        // }
        this.setState({ savedShifts: [{ id: 1, location: 'CG Brown', time: '1 - 9' }] });
    }

    // updateSavedList(shift) {
    //     this.setState({savedShifts: this.state.savedShifts.push(shift) });
    // }

    render() {
        return (
            <div className="container">
                <Infobar />
                <PickingOrder />
                <SavedShifts savedShifts={this.state.savedShifts} />
                <Shifts shifts={this.state.shifts} />
            </div>
        );
    };
};

export default App;