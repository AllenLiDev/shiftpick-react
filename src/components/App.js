import React from 'react';
import Infobar from './Infobar';
import PickingOrder from './PickingOrder';
import SavedShifts from './SavedShifts';
import Shifts from './Shifts';
// import SearchBar from './SearchBar';
// import ActiveFilters from './ActiveFilters';
import DropdownBar from './DropdownBar';

import './BackColor.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shifts: [], savedShifts: [], filters: [], dropdownOptions: [] };
    }

    componentDidMount() {
        // hardcode -- load from DB
        this.setState({
            shifts: [
                { id: 0, location: 'Location1', time: '1 - 9', type: 'Type1', status: 'available', dayOfWeek: 'Monday' },
                { id: 1, location: 'Location2', time: '11 - 5', type: 'Type1', status: 'available', dayOfWeek: 'Tuesday' },
                { id: 2, location: 'Location3', time: '9 - 1', type: 'Type2', status: 'available', dayOfWeek: 'Wednesday' },
                { id: 3, location: 'Location1', time: '2 - 10', type: 'Type3', status: 'available', dayOfWeek: 'Thursday' }
            ]
        });

        this.setState({
            dropdownOptions: [
                { id: 0, options: ['All Locations', 'location1', 'location2', 'location3'] },
                { id: 1, options: ['Anytime', 'Morning', 'Afternooon', 'Evening'] },
                { id: 2, options: ['All Types', 'Type1', 'Type2', 'Type3'] },
                { id: 3, options: ['All', 'Only Available'] },
                { id: 4, options: ['Days of Week', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] }
            ]
        });
    }

    // componentDidUpdate() {
    //     this.filterShifts();
    // }

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

    // addFilter = (keyword) => {
    //     let temp = this.state.filters;
    //     temp.push(keyword);
    //     this.setState({ filters: temp });
    // }

    // removeFilter = (keyword) => {
    //     let temp = this.state.filters;
    //     temp.splice(this.state.filters.indexOf(keyword), 1);
    //     this.setState({ filters: temp});
    // }

    filterShifts = () => {
        let temp = [];
        this.state.shifts.forEach((shift) => {
            console.log(shift);
            if (this.state.dropdownOptions[0].options[0] !== 'All Locations' && this.state.dropdownOptions[0].options[0] !== shift.location) {
                return;
                // console.log("location wrong");
            } else if(false) {
                return;
                // console.log("time wrong");
            } else if (this.state.dropdownOptions[2].options[0] !== 'All Types' && this.state.dropdownOptions[2].options[0] !== shift.type) {
                return;
                // console.log("type wrong");
            } else if (this.state.dropdownOptions[3].options[0] !== 'All' && this.state.dropdownOptions[3].options[0] !== shift.status) {
                return;
                // console.log("unavailable");
            } else if (this.state.dropdownOptions[4].options[0] !== 'Days of Week' && this.state.dropdownOptions[4].options[0] !== shift.dayOfWeek) {
                return;
                // console.log('wrong day');
            } else {
                temp.push(shift);
            }
        });
        this.setState({ shifts: temp });
    }

    setDropdown = (id, selection) => {
        let temp = this.state.dropdownOptions;
        temp[id].options[0] = selection;
        this.setState({ dropdownOptions: temp });
        this.filterShifts();
    }

    render() {
        return (
            <div className="container" >
                <Infobar />
                <div className="row">
                    <div className="col-4">
                        <PickingOrder />
                        <SavedShifts savedShifts={this.state.savedShifts} removeFromSaved={this.removeFromSaved} />
                    </div>
                    <div className="col-8">
                        {/* <SearchBar filterShifts={this.addFilter} /> */}
                        {/* <ActiveFilters filters={this.state.filters} removeFilter={this.removeFilter}/> */}
                        <DropdownBar dropdown={this.state.dropdownOptions} setDropdown={this.setDropdown} />
                        <Shifts shifts={this.state.shifts} addToSaved={this.addToSaved} />
                    </div>
                </div>
            </div >
        );
    };
};

export default App;