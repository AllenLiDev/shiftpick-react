import React from 'react';
import Infobar from './Infobar';
import PickingOrder from './PickingOrder';
import SavedShifts from './SavedShifts';
import Shifts from './Shifts';
import SearchBar from './SearchBar';
import ActiveFilters from './ActiveFilters';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shifts: [], savedShifts: [], filters: [] };
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
        if (!this.state.savedShifts.includes(shift)) {
            let temp = this.state.savedShifts;
            temp.push(shift);
            this.setState({ savedShifts: temp });
        } else {
            console.log('already saved! <-change this to user alert.')
        }
    }

    removeFromSaved = (shift) => {
        let temp = this.state.savedShifts;
        temp.splice(this.state.savedShifts.indexOf(shift), 1);
        this.setState({ savedShifts: temp });
    }

    filterShifts = (keyword) => {
        let temp = this.state.filters;
        temp.push(keyword);
        this.setState({ filters: temp });
    }

    removeFilter = (keyword) => {
        let temp = this.state.filters;
        temp.splice(this.state.filters.indexOf(keyword), 1);
        this.setState({ filters: temp});
    }

    render() {
        return (
            <div className="container">
                <Infobar />
                <div className="row">
                    <div className="col-3">
                        <PickingOrder />
                        <SavedShifts savedShifts={this.state.savedShifts} removeFromSaved={this.removeFromSaved} />
                    </div>
                    <div className="col-9">
                        <SearchBar filterShifts={this.filterShifts} />
                        <ActiveFilters filters={this.state.filters} removeFilter={this.removeFilter}/>
                        <Shifts shifts={this.state.shifts} addToSaved={this.addToSaved} />
                    </div>
                </div>
            </div>
        );
    };
};

export default App;